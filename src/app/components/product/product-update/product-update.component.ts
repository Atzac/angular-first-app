import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

	product: Product = {
		name: '',
		price: null,
		id: ''
	}

	newArrProducts: Product[]

  constructor(
		private localStorage: LocalStorageService, 
		private router: Router,
		private route: ActivatedRoute
	) { }

  ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id')
		let data = this.localStorage.get('PRODUCTS');

		this.product = data.find((item: Product) => item.id === id)
		this.newArrProducts = data.filter((item: Product) => item.id !== id)
		console.log(this.newArrProducts)
  }

	updateProduct(): void {
		let newData;

		newData = [...this.newArrProducts, this.product]
		this.localStorage.set('PRODUCTS', newData)
		
		window.location.replace('products')
	}

	cancel(): void {
		this.router.navigate(['products'])
	}
}
