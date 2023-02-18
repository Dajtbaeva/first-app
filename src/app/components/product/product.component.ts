import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
/* импортируем декоратор Component из angular/core*/

/* отсюда будем экспортировать этот класс, 
навешиваем декоратор на этот класс */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
/* регестрируем этот компонент в app.module.ts 
declarations -> name of class */
export class ProductComponent {
  /* this decorator also imports from /angular/core
  определяем в какое свойство положить инпут данные */
  @Input() product: IProduct;
  /* tsconfig.json -> compilerOptions -> 
  "noPropertyAccesFromIndexSignature": false,
  "strictPropertyInitialization": false */
  details = false;
}
