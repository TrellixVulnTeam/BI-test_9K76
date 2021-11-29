import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient, HttpHeaders } from "@angular/common/http"
 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [QRScanner, Camera]
})
export class HomePage implements OnInit {

  constructor( private qrScanner: QRScanner, 
               private http: HttpClient,
               private camera: Camera) {}


  
  public showScanBtn:boolean = true
  public showTakePic:boolean = false
  // private basicUrl = 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/'
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
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           if (text && typeof text === 'string') {
             const tempArr = text.split(';')
             this.basicUrl = tempArr[0]
             this.username = tempArr[1].split(':')[1]
             this.password = tempArr[2].split(':')[1]
             this.showScanBtn = false // switch show btn
             this.http.get( `${this.basicUrl}/api/v1.0/status`)
              .subscribe((res: any) => {
                this.status = res.status
                if (res.status === 'ok') {
                  this.showTakePic = true
                } else {
                  this.showTakePic = false
                }
              })
           }
           this.qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
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
    this.http.get(`${this.basicUrl}/api/v1.0/status`)
    .subscribe((res: any) => {
      this.status = res.status
      if (res.status === 'ok') {
        this.showTakePic = true
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
      this.http.post(url, param, httpOptions).subscribe((res: any) => {
        this.uploadImageName = `${this.basicUrl}/api/v1.0/image/${res.file}`
      })
     }, (err) => {
     });
     
  }

}
