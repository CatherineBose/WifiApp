import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/rx';

@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken = localStorage.getItem('jwtToken')

    if (jwtToken) {
      let clone = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
      })

      return next.handle(clone)
    }
    
    return next.handle(req)
  }

}
