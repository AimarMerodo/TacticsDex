import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',

})
export class HeaderComponent {
  env = environment
  pagesList = [
    { title: "Pokedex", route: "/pokedex" },
    { title: "Builder", route: "/builder" }
  ];
}
