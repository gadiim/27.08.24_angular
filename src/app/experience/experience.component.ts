import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() residence: string = '';
  @Input() experience: string = '';
  @Input() skills: string = '';

  selectedSkills: string = '';

  showCombat() {
    this.selectedSkills = 'combat';
  }

  showStealth() {
    this.selectedSkills = 'stealth';
  }

  showStrategy() {
    this.selectedSkills = 'strategy';
  }

  showNegotiation() {
    this.selectedSkills = 'negotiation';
  }

  selectedExperience: string = '';

  showMercenary() {
    this.selectedExperience = 'mercenary';
  }

  showAssassin() {
    this.selectedExperience = 'assassin';
  }

  showFormerInstituteOperative() {
    this.selectedExperience = 'formerInstituteOperative';
  }
}


