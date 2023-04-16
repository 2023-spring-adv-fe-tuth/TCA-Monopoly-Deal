import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamestart',
  templateUrl: './gamestart.page.html',
  styleUrls: ['./gamestart.page.scss'],
})
export class GamestartPage implements OnInit {

  constructor(
    private gameSvc: GameService
  ) { }

  playersList : Player[] = [];
  currentPlayerList = '';

  ngOnInit() {
    this.playersList = this.gameSvc.returnPlayerList();
    console.table(this.playersList)
  }
  updateCurrentPlayerList(ev:any){
    this.currentPlayerList = ev.target.value;
    console.log(this.currentPlayerList);
    this.gameSvc.updateCurrentGame(ev.target.value);
  }



}
