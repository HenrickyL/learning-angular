import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-page-component',
  imports: [],
  templateUrl: './other-page-component.html',
  styleUrl: './other-page-component.css'
})
export class OtherPageComponent {
  @Input() state: string = 'default';
}
