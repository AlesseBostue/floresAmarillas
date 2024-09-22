import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dedication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dedication.component.html',
  styleUrl: './dedication.component.css'
})
export class DedicationComponent {
  @Input() show: boolean = false;

}
