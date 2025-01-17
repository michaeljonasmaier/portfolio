import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pf-btn',
  standalone: true,
  imports: [],
  templateUrl: './pf-btn.component.html',
  styleUrl: './pf-btn.component.scss'
})
export class PfBtnComponent {
  @Input() title: string = 'Default';
}
