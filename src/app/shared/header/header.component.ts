import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateModule, TranslateService } from "@ngx-translate/core";
import { LanguageServiceService } from '../../services/language-service.service';

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

  languageService = inject(LanguageServiceService);

  constructor(private renderer: Renderer2, private translate: TranslateService) {
    this.languageService.getFromLocalStorage();
    this.language = this.languageService.language;
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
    if (this.languageService.language == "de") {
      this.languageService.language = "en";
      this.language = this.languageService.language;
      this.translate.use(this.languageService.language);
      this.languageService.safeToLocalStorage();
    } else {
      this.languageService.language = "de";
      this.language = this.languageService.language;
      this.translate.use(this.languageService.language);
      this.languageService.safeToLocalStorage();
    }
  }
}
