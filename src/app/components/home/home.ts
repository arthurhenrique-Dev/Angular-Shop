import { Component } from '@angular/core';
import { HeaderDefault } from '../header-default/header-default';
import { Categories } from '../categories/categories';
import { Showcase } from '../showcase/showcase';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [HeaderDefault, Showcase, Categories, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
