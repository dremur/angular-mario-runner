import { Component } from '@angular/core';
import { Scene2DService } from './engine/graphics/scene2d.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Scene2DService]
})
export class AppComponent {
  title = 'app';
}
