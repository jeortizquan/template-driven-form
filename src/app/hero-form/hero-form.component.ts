import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Walking on Water', 'Healing',
            'Resurrection', 'Multiplication of resources'];

  model = new Hero(33, 'Christ', this.powers[0], 'Jesus');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  newHero() {
      this.model = new Hero(42, '', '');
  }
}
