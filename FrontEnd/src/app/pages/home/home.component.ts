import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features-secction.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturesComponent],
  templateUrl: './home.component.html',
})
export class HomePageComponent { }
