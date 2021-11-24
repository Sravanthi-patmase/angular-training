import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
 
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
   intercept(request: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
       if (request.body) {
        // const token: any = localStorage.getItem('token');

        // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });


        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log('error:'+ error);
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }) 
            );

        // const duplicate = request.clone({ body: request.body.replace(/pizza/gi, '🍕') });
        // return next.handle(duplicate);

      }
      return next.handle(request);
    }
}