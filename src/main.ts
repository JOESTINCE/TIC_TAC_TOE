import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-home></app-home>
  `,
  imports: [HomeComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
