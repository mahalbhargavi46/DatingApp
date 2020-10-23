import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                // Checking the errors based on the status code (401)
                if (error.status === 401){
                    return throwError(error.statusText);
                }
                // Checking the instance of HttpErrorResponse Errors
                if (error instanceof HttpErrorResponse) {
                    // The below code takes care of the 500 type of errors
                    const applicationError = error.headers.get('Application-Error');
                    if (applicationError)
                    {
                        return throwError(applicationError);
                    }
                    // Model state errors
                    const serverError = error.error;
                    let modelStateErrors = '';
                    if (serverError.errors && typeof serverError.errors === 'object') {
                        for (const key in serverError.errors) {
                            if (serverError.errors[key]) {
                                modelStateErrors += serverError.errors[key] + '\n';
                            }
                        }
                    }
                    // tslint:disable-next-line: max-line-length
                    // Provided 'Server Error' because if we get that error in our application we have not captured it in the code and we will have to investigate what actually the error is.
                    return throwError (modelStateErrors || serverError || 'Server Error');
                }
            })
        );
    }
}

// export the array of providers
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
