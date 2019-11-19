import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _get from 'lodash.get';
import { Observable } from 'rxjs';

import { realmIdPlaceholder } from './realm.constant';
import { RealmStateService } from './realm-state.service';

@Injectable()
export class RealmInterceptor implements HttpInterceptor {

  constructor(private activatedRoute: ActivatedRoute,
              private realmStateService: RealmStateService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes(realmIdPlaceholder)) {
      return next.handle(req);
    }

    const realmId = _get(this.activatedRoute, 'root.firstChild.snapshot.params.realmId', this.realmStateService.getRealm());
    const secureReq = req.clone({
      url: req.url.replace(realmIdPlaceholder, realmId),
    });

    return next.handle(secureReq);
  }
}
