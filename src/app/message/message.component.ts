import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message = 'Oña :D';
  displayedText = '';
  private index = 0;

  constructor() {
    this.typeText()
  }

  private typeText(){

    const typeSpeed = 80;
    if (this.index < this.message.length) {

      this.displayedText += this.message.charAt(this.index);
      this.index++;

      setTimeout( () => this.typeText(), typeSpeed );

    }

  }

}
