import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from "../message/message.component";
import { ButtonComponent } from '../button/button.component';
import { DedicationComponent } from '../dedication/dedication.component';
import { SimfoniComponent } from '../simfoni/simfoni.component';

@Component({
    selector: 'app-bg-flowers',
  standalone: true,
  imports: [CommonModule, MessageComponent, ButtonComponent, DedicationComponent, SimfoniComponent],
  templateUrl: './bg-flowers.component.html',
  styleUrl: './bg-flowers.component.css'
})
export class BgFlowersComponent {
    
    moveMessage     = false;
    showNewMessage  = false;
    showImg         = false;
    clickCount      = 0;
    
    onButtonClick() {
        this.clickCount++;
    
        if (this.clickCount === 1) {
          this.moveMessage = true;  // Desplaza el mensaje
          setTimeout(() => {
            this.showNewMessage = true;  // Muestra el nuevo mensaje
          }, 500);
        } else if (this.clickCount === 2) {
          this.showNewMessage = false;  // Oculta el nuevo mensaje
          this.showImg = true;  // Muestra la imagen
        } else if (this.clickCount === 3) {
          this.showImg = false;  // Oculta la imagen
          this.clickCount = 0;  // Reinicia el flujo
          location.reload();  // Recarga la página (opcional)
        }
      }
    

    // flowers = new Array(10).fill(null);
    flowers: { url:String; top: string; left: string; }[] = [];
	sparkles: { top: number; left: number; delay: number }[] = [];
	numImagenes = 12;

  constructor() {
    this.genRandomPosition();
		this.genSparkles(50); // brillitos :D
  }

	/* metodos */
  private genRandomPosition() {

		// imagenes a renderizar
		const imgUrls = [
			'https://images.vexels.com/media/users/3/185318/isolated/preview/3463339e4c90719310ded8dd95e64689-petalos-elipticos-de-flor-amarilla-planos.png',
			'https://cdn-icons-png.flaticon.com/512/8696/8696403.png',
			'https://i.imgur.com/xwF4WpM.png',
			'https://i.imgur.com/UwiJSoK.png',
            'https://i.imgur.com/qlClUvy.png'

		]

		const positions = this.genGridPosition(3, 4);
		const shufflePosition = this.shufflePositions(positions);
		const selectedPositions = this.selectTopPositions(shufflePosition, this.numImagenes);
		const repeatedImageUrls = Array.from({ length: this.numImagenes }, (_, index) => imgUrls[index % imgUrls.length]);

    // Asigna las URLs y posiciones a las imágenes
    this.flowers = repeatedImageUrls.map((url, index) => ({
      url: url,
      top: selectedPositions[index].top,
      left: selectedPositions[index].left
    }));
  }

		// this.flowers = imgUrls.map((url, index) => ({
    //   url: url,
    //   top: `${shufflePosition[index].top}%`,
    //   left: `${shufflePosition[index].left}%`
    // }));

    // for(let i = 0; i < 10; i++){
    //   const top = Math.random() * 90;
    //   const left = Math.random() * 90;

    //   this.flowers.push({
    //     top: `${top}%`,
    //     left: `${left}%`
    //   });
    // }

	private genGridPosition(rows: number, cols: number) : { top: number; left: number; }[] {
		const positions = [];
		
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				positions.push({
					top: this.calculatePosition(row, rows),
					left: this.calculatePosition(col, cols)
				});
			}
		}
	
		return positions;
	}

	// Calcula la posición con un margen aleatorio dentro de la celda
	// se lo pedi a chatgpt :c
	private calculatePosition( index:number, total:number) : number{
		return index *(100 / total) + Math.random() * (100/total);
	}

	// Mezcla las posiciones para asegurar aleatoriedad
	private shufflePositions( positions: { top: number; left: number; }[]) : { top: number; left: number; }[] {
		
		for (let i = positions.length - 1; i > 0; i--) {
			
			const j = Math.floor(Math.random() * (i + 1));
			[positions[i], positions[j]] = [positions[j], positions[i]];
		}
		
		return positions;
	}

	private selectTopPositions(positions: { top: number; left: number; }[], count: number): { top: string; left: string; }[] {
		return positions.slice(0, count).map(pos => ({
			top: `${pos.top}%`,
			left: `${pos.left}%`
		}));
	}

	// Genera posiciones aleatorias para los brillitos
  private genSparkles(count: number) {
    for (let i = 0; i < count; i++) {
      this.sparkles.push({
        top: Math.random(),
        left: Math.random(),
        delay: Math.random()
      });
    }
  }

}
