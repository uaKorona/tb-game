import { Component } from '@angular/core';
import { PlayerTypes } from '../../../../src/models/player-types.enum';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  standalone: true,
  imports: [],
})
export class NewGameComponent {
  selectDark(): Observable<{ gameUrl: string }> {
    return this.selectSide(PlayerTypes.dark);
  }

  selectLight(): Observable<{ gameUrl: string }> {
    return this.selectSide(PlayerTypes.light);
  }

  selectSide(playerType: PlayerTypes): Observable<{ gameUrl: string }> {
    console.log('init game with player', playerType);

    return of({
      gameUrl: 'http://demo-game.eu-west-1.elasticbeanstalk.com/',
    });
  }


}
