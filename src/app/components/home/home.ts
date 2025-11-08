import { Component } from '@angular/core';
import { HeaderDefault } from '../header-default/header-default';
import { Carousel } from '../carousel/carousel';
import { Categories } from '../categories/categories';

@Component({
  selector: 'app-home',
  imports: [HeaderDefault, Carousel, Categories],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
