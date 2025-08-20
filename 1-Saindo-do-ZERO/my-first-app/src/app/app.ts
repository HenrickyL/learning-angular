import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtherPageComponent } from "./components/other-page-component/other-page-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OtherPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Meu Primeiro App Angular');
}
