import { Product } from './../product.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

	products: Product[];
	displayedColumns = ['name', 'price', 'action']

  ngOnInit(): void {
		this.products = this.localStorageService.get('PRODUCTS')
		console.log(this.products)
  }
}
