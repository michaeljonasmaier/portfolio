import { Component, OnInit  } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrollt nach oben
  }
    
}
