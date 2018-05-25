import {Component, OnDestroy, OnInit} from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero: Hero = { id: 1, name: 'webstorm' };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log(this.heroService);
  }

  ngOnInit() {
    console.log('ngOnInit()메소드 호출');
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log('ngOnDestory lll()메소드 호출');
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes().
      subscribe( (res) => {
        this.heroes = res;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero)
      .subscribe();
  }
}
