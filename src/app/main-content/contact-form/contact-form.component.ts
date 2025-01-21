import { Component } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [PfBtnComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
