import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';


type InputTypes = 'text' | 'email' | 'password' | 'number';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  // viewProviders: [{ provide: ControlContainer, useExisting: ControlContainer }] // sample solution for formGroupName issue

})
export class InputComponent implements ControlValueAccessor {
  

  @Input() type: InputTypes = 'text';
  @Input() formName: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() primary: boolean = false;
  @Input() inputName: string = '';
  // implement ControlValueAccessor
  value: string = '';
  onChange = () => { };
  onTouched = () => { };
  onInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
  }
  writeValue=(value: any)=>{this.value = value;}
  registerOnChange(fn: any): void {this.onChange = fn;}
  setDisabledState(isDisabled: boolean): void {}
  registerOnTouched(fn: any): void {}
}
