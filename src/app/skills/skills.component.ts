import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() residence: string = '';
  @Input() experience: string = '';
  @Input() skills: string = '';

  selectedObject: string = '';

  showCombat() {
    this.selectedObject = 'combat';
  }

  showStealth() {
    this.selectedObject = 'stealth';
  }

  showStrategy() {
    this.selectedObject = 'strategy';
  }

  showNegotiation() {
    this.selectedObject = 'negotiation';
  }
}


