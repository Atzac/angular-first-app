import { Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
		  private localStorage: LocalStorageService, 
		  private matSnackBar: MatSnackBar,
			private router: Router
		) { }

  ngOnInit(): void {
  }

	createProduct(): void {
		// let data = this.localStorage.get('PRODUCTS');

		// if (data) {
		// 	data = [...data, product]
		// }
		// this.localStorage.set('PRODUCTS', data)
		
		this.showMessage()
		this.router.navigate(['products'])
	}

	showMessage(): void {
		this.matSnackBar.open('Cadastrado!', '', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top'
		})
	}

}
