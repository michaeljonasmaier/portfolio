import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  language: "en" | "de" = "en";

  constructor(private renderer: Renderer2, private translate: TranslateService) {
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.documentElement, 'overflow', '');
    }
  }

  changeLanguage() {
    if (this.language == "de") {
      this.language = "en";
      this.translate.use('en');
    } else {
      this.language = "de";
      this.translate.use('de');
    }
  }
}
