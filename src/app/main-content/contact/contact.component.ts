import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
