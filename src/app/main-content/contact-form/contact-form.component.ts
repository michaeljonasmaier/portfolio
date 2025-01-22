import { Component } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [PfBtnComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent{

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  contactForm: FormGroup; // Deklaration des Formulars

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });   
  }

  onSubmit() {
    this.contactData = this.contactForm.value;
    console.log(this.contactData);
    console.log(this.contactForm.valid);
    var element = <HTMLInputElement>document.getElementById("checkbox");
    var checkbox = <HTMLInputElement>document.getElementById("errmsg");
    if(!this.contactForm.valid){
      checkbox.classList.add("show");
    } else{
      checkbox.classList.remove("show");
    }
  }

  checkIfValid(){
console.log("sdfsd")
  }
}
