import { Component, inject } from '@angular/core';
import { CarouselService } from '../../services/carousel-service';

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
    carousel = inject(CarouselService)
    get retorno(): string{
      return this.carousel.retorno
    }
    ngOnInit(): void{
      this.carousel.init([
          '/Carrossel/VestidoLolita.png',
          '/Carrossel/VestidoLolita2.png'
      ])
    }
}
