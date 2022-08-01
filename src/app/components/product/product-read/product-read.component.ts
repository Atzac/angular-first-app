import { HeaderService } from './../../template/header.service';
import { Product } from './../product.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

	products: Product[];
	displayedColumns = ['name', 'price', 'action']
	newArrProducts: Product[]

  constructor(private localStorage: LocalStorageService, private headerService: HeaderService) { 
		headerService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			routeUrl: ''
		}
	 }


  ngOnInit(): void {
		this.products = this.localStorage.get('PRODUCTS')
		console.log(this.products)
  }

	delete(id: string): void {
		console.log(id)
		let data = this.localStorage.get('PRODUCTS');

		this.newArrProducts = data.filter((item: Product) => item.id !== id)
		this.localStorage.set('PRODUCTS', this.newArrProducts)
		window.location.reload()
	}
}
