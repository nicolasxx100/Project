import { Component, OnInit } from '@angular/core'; 
import { ProductService } from 'src/app/services/productService/product.service';
import Swal from 'sweetalert2' 

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

  buy(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea confirmar su compra?',
      text: "No hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmar!',
      cancelButtonText: 'No, cancela',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Comprado!',
          'Su producto ha sido comprado!',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Evitada',
          'Su compra se ha evitado. Elija otro producto',
          'error'
        )
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((data: any) => {this.productService.products = data.products
      console.log(this.productService.products)
      }
    )
  }

}
