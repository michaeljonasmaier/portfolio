import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(private renderer: Renderer2) {

  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.documentElement, 'overflow', '');
    }
  }
}
