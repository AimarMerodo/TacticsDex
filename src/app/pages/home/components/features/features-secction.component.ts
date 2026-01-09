import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../../../shared/components/feature-card.componnent/feature-card.component';

@Component({
  selector: 'app-home-features-secction',
  imports: [FeatureCardComponent],
  templateUrl: './features-secction.component.html'
})
export class FeaturesComponent {
  featuresList = [
    {
      title: 'Pokédex',
      description: 'Access detailed data for every Pokémon. Base stats, abilities, evolution chains, and move sets powered by PokeAPI.',
      iconName: 'database'
    },
    {
      title: 'Team Builder',
      description: 'Craft the perfect team of 6. Assign moves, natures, and held items. Calculate type coverage and weaknesses instantly.',
      iconName: 'groups'
    },
    {
      title: 'Analytics',
      description: 'Visualize your teams power curve. Compare base stat totals and identify strategic gaps in your defense.',
      iconName: 'bolt'
    }
  ];
}
