import { Component } from '@angular/core';

@Component({
  selector: 'app-show-products',
  imports: [],
  templateUrl: './show-products.html',
  styleUrl: './show-products.css',
})
export class ShowProducts {
    indice: number = 0
    imagens: Array<string> = ['/Carrossel/VestidoLolita.png', '/Carrossel/VestidoLolita2.png']
    
    get retorno(): string{
        return this.imagens[this.indice]
    }
    AumentarIndice(): void{
        if (this.indice >= this.imagens.length - 1){
          this.indice = 0
        } else {
          this.indice++
        }
    }
    DiminuirIndice(): void{
        if (this.indice <= 0){
          this.indice = this.imagens.length - 1
        } else {
          this.indice--
        }
    }
}
