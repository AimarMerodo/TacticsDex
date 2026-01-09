import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();

  pagesList = [
    { title: "Home", route: "/" },
    { title: "Pokedex", route: "/pokedex" },
    { title: "Builder", route: "/builder" }
  ];

}
