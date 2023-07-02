import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMenuComponent} from "./app-menu/app-menu.component";

const routes: Routes = [
  {
    path: '',
    component: AppMenuComponent
  },
  {
    path: 'new-game',
    loadComponent: () => import('./new-game/new-game.component').then(m => m.NewGameComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
