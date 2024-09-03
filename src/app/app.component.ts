import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, SkillsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cv = [
    {
      name: 'Conrad',
      surname: 'Kellogg',
      phone: '+123456789',
      email: 'conrad.kellogg@fallout4.com',
      residence: 'Diamond City, Commonwealth',
      experience: 'Mercenary, Assassin, Former Institute Operative',
      skills: 'Combat, Stealth, Strategy, Negotiation',
    }]
    
}