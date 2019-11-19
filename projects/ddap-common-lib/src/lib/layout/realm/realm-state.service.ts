import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'realm';

@Injectable({
  providedIn: 'root',
})
export class RealmStateService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  storeRealm(realm: string): void {
    this.storage.set(STORAGE_KEY, realm);
  }

  getRealm(): boolean {
    return this.storage.get(STORAGE_KEY);
  }

}
