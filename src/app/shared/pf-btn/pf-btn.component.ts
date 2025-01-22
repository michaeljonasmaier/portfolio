import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pf-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pf-btn.component.html',
  styleUrl: './pf-btn.component.scss'
})
export class PfBtnComponent{
  @Input() title: string = 'Default';
 

  
}
