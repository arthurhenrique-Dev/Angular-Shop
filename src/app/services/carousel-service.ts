import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
    private indice = 0
    private imagens: string[] = []

    init(imagens: string[]): void{
        this.imagens = imagens
        this.indice = 0
    }
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
