import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BgFlowersComponent } from './bg-flowers/bg-flowers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BgFlowersComponent],
  template: '<app-bg-flowers/>'
})
export class AppComponent {
  title = 'floresAmarillas';
}
