import { Component } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [PfBtnComponent, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log(this.contactData);
    var element = <HTMLInputElement>document.getElementById("checkbox");
    var checkbox = <HTMLInputElement>document.getElementById("errmsg");
    var isChecked = element.checked;
    if(!isChecked){
      checkbox.classList.add("show");
    } else{
      checkbox.classList.remove("show");
    }
  }
}
