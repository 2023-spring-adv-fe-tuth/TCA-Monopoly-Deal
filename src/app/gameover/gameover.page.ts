import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.page.html',
  styleUrls: ['./gameover.page.scss'],
})
export class GameoverPage implements OnInit {

  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    let winner = 'TEST WINNER';
    console.log(this.gameSvc.returnCurrentGame());
  }




}
