import { Component } from '@angular/core';
import { HeaderDefault } from '../header-default/header-default';

@Component({
  selector: 'app-home',
  imports: [HeaderDefault],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
