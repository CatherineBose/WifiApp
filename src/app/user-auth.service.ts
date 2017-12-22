import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import 'rxjs/add/operator/shareReplay'

@Injectable()
export class UserAuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(email: String, password: String) {
    return this._http.post(`http://api.localhost.code:3000/login`, { email, password })
      .shareReplay()
  }
}
