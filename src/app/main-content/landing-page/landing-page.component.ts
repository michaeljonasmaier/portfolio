import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
