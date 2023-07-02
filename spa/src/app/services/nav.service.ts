import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private router = inject(Router);

  public navigateToNewGame(): Promise<boolean> {
    return this.router.navigate(['new-game']);
  }
}
