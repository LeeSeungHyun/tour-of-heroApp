import {Component, OnDestroy, OnInit} from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero: Hero = { id: 1, name: 'webstorm' };
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log('construct 생성자 호출');
  }

  ngOnInit() {
    console.log('ngOnInit()메소드 호출');
  }

  ngOnDestroy() {
    console.log('ngOnDestory lll()메소드 호출');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
