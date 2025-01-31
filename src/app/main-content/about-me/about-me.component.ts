import { Component } from '@angular/core';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [PfBtnComponent, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
