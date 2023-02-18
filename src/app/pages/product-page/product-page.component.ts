import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'my-first-app';

  /* name : datatype, can use this in app.component.html */
  // products: IProduct[] = data;
  // products: IProduct[] = [];
  // stream: type<generic>
  // products$: Observable<IProduct[]>;
  loading = false;
  term = '';

  /* connect service */
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });

    // this.productsService.getAll().subscribe((products) => {
    //   // console.log(products);
    //   this.products = products;
    //   this.loading = false;
    // });

    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    // throw new Error('Method not implemented.');
  }
}
