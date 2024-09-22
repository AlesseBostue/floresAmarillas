import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simfoni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simfoni.component.html',
  styleUrl: './simfoni.component.css'
})
export class SimfoniComponent {
  @Input() show: boolean = false;
}
