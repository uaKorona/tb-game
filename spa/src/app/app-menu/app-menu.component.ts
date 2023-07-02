import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NavService} from "../services/nav.service";

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private navService = inject(NavService);

  goToNewGame(): Promise<boolean> {
    return this.navService.navigateToNewGame();
  }
}
