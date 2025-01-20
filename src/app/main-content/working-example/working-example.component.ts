import { Component, Input } from '@angular/core';
import { WorkingExample } from '../../interfaces/working-example';
import { PfBtnComponent } from '../../shared/pf-btn/pf-btn.component';

@Component({
  selector: 'app-working-example',
  standalone: true,
  imports: [PfBtnComponent],
  templateUrl: './working-example.component.html',
  styleUrl: './working-example.component.scss'
})
export class WorkingExampleComponent {
  @Input() workingExample!: WorkingExample;
  shouldReverse = false;
  toggleReverse() {
    this.shouldReverse = !this.shouldReverse; // Klasse umschalten
  }
}
