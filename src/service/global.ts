import { Injectable } from '@angular/core'

@Injectable()

export class AppService{

public baseUrl: string;

constructor() {
    this.baseUrl = ''
}

    setUrl (val: string) {
        this.baseUrl = val
    }

    getUrl () {
        return this.baseUrl
    }

}