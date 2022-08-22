import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class StorageService {
  public setItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public getItem(key: string) {
    const info = sessionStorage.getItem(key);
    return this.parseJson(info);
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  public clear() {
    sessionStorage.clear();
  }

  parseJson(object: any) {
    return JSON.parse(object);
  }
}
