import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() {}

  ngOnInit(): void {}

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
