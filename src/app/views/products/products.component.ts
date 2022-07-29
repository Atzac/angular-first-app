import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[];

  constructor(private router: Router) {

	}

  ngOnInit(): void {
  }

	navigateToCreate(): void {
		this.router.navigate(['products/create'])
  }

}
