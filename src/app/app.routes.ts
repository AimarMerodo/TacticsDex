import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home.component';
import { BuilderPageComponent } from './pages/builder/builder.component';
import { PokedexPageComponent } from './pages/pokedex/pokedex.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'builder',
                component: BuilderPageComponent
            },
            {
                path: 'pokedex',
                component: PokedexPageComponent
            }

        ]
    }
];
