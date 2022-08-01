import { headerData } from './header/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

	private _headerDaata = new BehaviorSubject<headerData>({
		title: 'Início',
		icon: 'home',
		routeUrl: ''
	})

  constructor() { }

	get headerData() {
		return this._headerDaata.value
	}

	set headerData(HeaderData: headerData) {
		this._headerDaata.next(HeaderData)
	}
}
