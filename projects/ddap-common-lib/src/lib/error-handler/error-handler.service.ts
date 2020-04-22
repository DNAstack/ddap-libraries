import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, OperatorFunction } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {

  constructor(private snackBar: MatSnackBar) {
  }

  public notifyOnError<T>(message?: string): OperatorFunction<T, T> {
    return catchError<T, Observable<T>>((error) => {
      this.openSnackBar(message, error);
      throw error;
    });
  }

  public openSnackBar(message: string, error?: {message: string}) {
    this.snackBar.open(message ? message : error.message, null, {
      duration: 3000,
      panelClass: 'ddap-error',
    });
  }

}
