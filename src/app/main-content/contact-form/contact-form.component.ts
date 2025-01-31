import { Component, inject } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, NgForm } from '@angular/forms';
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
    checked: false,
  }

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


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.valid && this.mailTest) {
      ngForm.reset();
    }
  }

}
