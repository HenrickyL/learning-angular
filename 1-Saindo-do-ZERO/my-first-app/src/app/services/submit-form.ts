import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitForm {
  
  submitFormData(data: any): void {
    console.log('Form submitted with data:', data);
  }
}
