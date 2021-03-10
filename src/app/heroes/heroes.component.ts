import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor() {}

  ngOnInit(): void {}

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  @ViewChild(HeroDetailComponent, { static: true }) child: HeroDetailComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }

  @ViewChildren(HeroDetailComponent)
  selectedComponents: QueryList<HeroDetailComponent>;

  increaseAll() {
    this.selectedComponents.forEach((element) => {
      element.increment();
    });
  }
}
