import { Component } from '@angular/core';
import { HeaderDefault } from '../header-default/header-default';
import { ShowProducts } from '../show-products/show-products';

@Component({
  selector: 'app-home',
  imports: [HeaderDefault, ShowProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
