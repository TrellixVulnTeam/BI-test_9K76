import {Injectable} from '@angular/core'
import {HttpClient, HttpParams } from '@angular/common/http'

@Injectable()
export class HttpRequest {
  public http: any

  constructor(Http: HttpClient) {
    this.http = Http
  }

  public get (url: string, params?: Object, callback?: Function) {
    let httpParams = new HttpParams()
    const vm = this
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key])
        }
      }
    }
    vm.http.get(url, {params: httpParams})
      .subscribe((data: any) => {
        callback(data)
      })
  }

  public post(url: string, data?: Object, options?: Object, callback?: Function) {
    const vm = this
    vm.http.post(url, data, options)
      .subscribe((res: any) => {
        callback(res)
      })
  }
}
