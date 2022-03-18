import { Component, OnInit } from '@angular/core'; 
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(){
    this.productService.getProducts().subscribe((data: any) => {this.productService.products = data.products
      console.log(this.productService.products)
      }
    )
  }

}
