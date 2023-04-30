import { Component } from '@angular/core';
import { Player } from '../player';
import { GameService } from '../game.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private gameSvc: GameService
  ) {}

  playersList : Player[] = [];

  ngOnInit() {
    this.gameSvc.ngOnInit();
    this.playersList = this.gameSvc.returnPlayerList();


    //local storage testing


  }

  

}
