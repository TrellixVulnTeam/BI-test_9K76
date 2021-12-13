// import {Injectable, NgModule} from '@angular/core'
// import { HttpRequest } from '../service/http'

// @Injectable()
// @NgModule({
//     providers: [HttpRequest]
//   })
// export class ScanModule {

//   constructor(private httpRequest: HttpRequest) {

//   }

//   public checkStatus (callback: Function) {
//     this.httpRequest.get('api/v1.0/status', {}, (res: any) => {
//         callback(res)
//     })
//   }

//   public uploadImage (param: Object, httpOptions: Object, callback: Function) {
//       this.httpRequest.post('api/v1.0/image', param, httpOptions, (res: any) => {
//         callback(res)
//       })
//   }
// }
