import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bg-flowers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bg-flowers.component.html',
  styleUrl: './bg-flowers.component.css'
})
export class BgFlowersComponent {
  // flowers = new Array(10).fill(null);
  flowers: { top: string; left: string; }[] = [];

  constructor() {
    this.genRandomPosition();
  }

  private genRandomPosition() {
		const positions = this.genGridPosition(3, 4);
		const shufflePosition = this.shufflePositions(positions);
  	this.flowers = this.selectTopPositions(shufflePosition, 20);

    // for(let i = 0; i < 10; i++){
    //   const top = Math.random() * 90;
    //   const left = Math.random() * 90;

    //   this.flowers.push({
    //     top: `${top}%`,
    //     left: `${left}%`
    //   });
    // }
  }

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

}
