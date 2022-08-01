import { Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as uuid from 'uuid';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	product: Product = {
		name: '',
		price: null,
		id: uuid.v4()
	}

  constructor(
		  private localStorage: LocalStorageService, 
		  private matSnackBar: MatSnackBar,
			private router: Router
		) { }

  ngOnInit(): void {
  }

	createProduct(): void {
		let data = this.localStorage.get('PRODUCTS');
		let newData;

		if (data) {
			newData = [...data, this.product]
		} else {
			newData = [this.product]
		}
		this.localStorage.set('PRODUCTS', newData)
		
		//this.showMessage()
		window.location.replace('products')
	}

	cancel(): void {
		this.router.navigate(['products'])
	}

	showMessage(): void {
		this.matSnackBar.open('Cadastrado!', 'x', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top'
		})
	}

}
