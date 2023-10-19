import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { StorageService } from 'src/app/services/storage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private productservice: ProductService,
    private storageservice: StorageService,
    private cartservice:CartService
  ) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
        this.storageservice.loadproduct(data);
      },

      complete: () => {
        console.log('complete');
      },
      error: (error: Error) => {
        console.log('Message', error.message);
        console.log('Name', error.message);
      },
    });
  }
  addtocart(id:number){
    this.cartservice.addcart(id)

  }

}
