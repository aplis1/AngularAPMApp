import {Component} from '@angular/core';
import { HttpModule } from '@angular/http';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-app',
  template: `
      <div>
        <nav class='navbar navbar-default'>
          <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/products']">Product List</a></li>
            </ul>
          </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
      </div>
  `,
  providers: [ ProductService ]
})
export class AppComponent  {
  pageTitle: string = 'Product Management'
}