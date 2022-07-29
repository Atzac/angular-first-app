import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

	set(key: string, value: any): boolean { 
		if (this.storage) {
			this.storage.setItem(key, JSON.stringify(value));
			return true;
		}
		return false;
	}

	get(key: string): any {
    if (this.storage) {
			const data = this.storage.getItem(key)
      if (data) {
				return JSON.parse(data);
			} else {
				return []
			}
    }
    return null;
  }
}
