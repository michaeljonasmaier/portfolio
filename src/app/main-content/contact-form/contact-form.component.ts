import { Component, inject } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent{

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  contactForm: FormGroup; // Deklaration des Formulars

  mailTest = false;

  post = {
    endPoint: 'https://maiermichael.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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
    var checkbox = <HTMLInputElement>document.getElementById("errmsg");
    if(!this.contactForm.valid){
      console.log(this.contactData);
      checkbox.classList.add("show");
    } else{
      checkbox.classList.remove("show");
    }

    if (this.contactForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            this.contactForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.contactForm.valid && this.mailTest) {
      this.contactForm.reset();
    }
  }

}
