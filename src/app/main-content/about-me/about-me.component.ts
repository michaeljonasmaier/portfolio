import { Component } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [PfBtnComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
