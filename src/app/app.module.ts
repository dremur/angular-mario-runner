import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Scene2DComponent } from './engine/graphics/scene2d.component';


@NgModule({
  declarations: [
    AppComponent,
    Scene2DComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
