import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, OperatorFunction } from 'rxjs';
import { catchError } from 'rxjs/operators';
import _get from 'lodash.get';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  public notifyOnError<T>(message?: string, authRequired?: boolean): OperatorFunction<T, T> {
    return catchError<T, Observable<T>>((error) => {
      if (authRequired && error.status === 401) {
        this.logInAgainSnackBar('Your login session has expired. You will not be able to perform any actions until you log in again.');
      } else {
        this.openSnackBar(message, error);
      }
      throw error;
    });
  }

  public openSnackBar(message?: string, error?: {message: string}) {
    this.snackBar.open(message ? message : error.message, null, {
      duration: 3000,
      panelClass: 'ddap-error',
    });
  }

  public openSnackBarWithError(error?: any, errorMessagePath?: string) {
    this.snackBar.open(_get(error, errorMessagePath ? errorMessagePath : 'message'), null, {
      duration: 3000,
      panelClass: 'ddap-error',
    });
  }

  private logInAgainSnackBar(message?: string) {
    this.snackBar.open(message, "Log in", {
      panelClass: 'ddap-error',
    }).onAction()
      .subscribe(() => {
        this.activatedRoute.root.firstChild.params.subscribe((params) => {
          window.location.href = `/api/v1alpha/realm/${params.realmId}/identity/login`;
        });
      });
  }


}
