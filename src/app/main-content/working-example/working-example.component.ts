import { Component, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { WorkingExample } from '../../interfaces/working-example';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
import 'aos/dist/aos.css';
import * as AOS from 'aos';
@Component({
  selector: 'app-working-example',
  standalone: true,
  imports: [PfBtnComponent, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './working-example.component.html',
  styleUrl: './working-example.component.scss'
})
export class WorkingExampleComponent implements AfterViewInit, AfterViewChecked {
  @Input() workingExample!: WorkingExample;
  shouldReverse = false;
  toggleReverse() {
    this.shouldReverse = !this.shouldReverse; // Klasse umschalten
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }
}
