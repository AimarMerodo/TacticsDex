import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  env = environment
  year = new Date().getFullYear();

  pagesList = [
    { title: "Home", route: "/" },
    { title: "Pokedex", route: "/pokedex" },
    { title: "Builder", route: "/builder" }
  ];

}
