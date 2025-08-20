import { Component, inject } from '@angular/core';
import { CommonModule, } from "@angular/common";
import { SubmitForm } from '../../services/submit-form';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private submitFormService = inject(SubmitForm);
  name: string = 'Henricky';
  onActive : boolean = false;
  listItems: string[] = ["Fiddlesticks","Nami","Milio","Renata Glasc"]

  onClick(event:any) {
    this.onActive = !this.onActive;
  }

  submitData(event:any) {
    this.submitFormService.submitFormData({
      name: this.name,
    })
  }
}
