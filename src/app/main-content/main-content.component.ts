import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
