import { Component } from '@angular/core';
import { CommonModule, } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  name: string = 'Henricky';
  onActive : boolean = false;
  listItems: string[] = ["Fiddlesticks","Nami","Milio","Renata Glasc"]

  onClick(event:any) {
    this.onActive = !this.onActive;
  }
}
