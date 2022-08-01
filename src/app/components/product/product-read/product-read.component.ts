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

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

	products: Product[];
	displayedColumns = ['name', 'price', 'action']

  ngOnInit(): void {
		this.products = this.localStorageService.get('PRODUCTS')
		console.log(this.products)
  }

	// edit(): void {
	// 	this.router.navigate(['products/update'])
	// }
}
