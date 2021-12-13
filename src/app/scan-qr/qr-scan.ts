import { Component, OnInit } from '@angular/core'
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { HttpRequest } from '../../service/http'
import { HttpHeaders } from "@angular/common/http"
 


@Component({
  selector: 'app-home',
  templateUrl: 'qr-scan.html',
  styleUrls: ['qr-scan.scss'],
  providers: [QRScanner, Camera, HttpRequest]
})
export class QrScan implements OnInit {

  constructor( private qrScanner: QRScanner, 
               private httpRequest: HttpRequest,
               private camera: Camera) {}


  
  public showScanBtn:boolean = true
  public showTakePic:boolean = false
  private basicUrl:string = ''
  public status:string = ''
  public uploadImageName:string = ''
  public username:string = ''
  public password:string = ''
  ngOnInit() {
    console.log('on init')
  }
  scan() {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // start scanning, from ionic document
         let scanSub = this.qrScanner.scan().subscribe((text: any) => {
           if (text && typeof text.result === 'string') {
             const tempArr = text.result.split(';')
             this.basicUrl = 'https:' + tempArr[0].split(':')[2]
             this.username = tempArr[1].split(':')[1]
             this.password = tempArr[2].split(':')[1]
             this.httpRequest.get(`${this.basicUrl}api/v1.0/status`, {}, (res: any) => { // call status api
              this.status = res.status
              if (res.status === 'ok') {
                this.showScanBtn = false // switch show btn
                this.showTakePic = true
              } else {
                this.showTakePic = false
              }
             })
             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
           }
         });
  
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  
  }

  checkStatus () { // check status function
    this.httpRequest.get(`${this.basicUrl}api/v1.0/status`, (res: any) => {
      this.showScanBtn = false // switch show btn
      this.status = res.status
      if (res.status === 'ok') {
        this.showTakePic = true
      } else {
        this.showTakePic = false
      }
     })
  }

  takePic () { // call camera
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = `data:image/jpeg;base64,${imageData}`;
      const url = `${this.basicUrl}/api/v1.0/ranking`
      const param = {
        "picture": base64Image
      }
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json;charset=utf-8',
          // set auth, but seems doesn't work on browser
          'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
        })
      }
      // no idea how to limit pic size on ionic
      this.httpRequest.post(url, param, httpOptions, (res: any) => {
        if (res) {
          this.uploadImageName = `${this.basicUrl}/api/v1.0/image/${res.file}`
        }
      })
     }, (err) => {
     })
     
  }

}
