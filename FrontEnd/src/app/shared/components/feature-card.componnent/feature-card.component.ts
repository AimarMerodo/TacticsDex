import { Component, input } from '@angular/core';
import type { Feature } from './feature.model';
@Component({
  selector: 'app-feature-card',
  standalone: true,
  templateUrl: './feature-card.component.html'
})
export class FeatureCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  iconName = input.required<string>();
}
