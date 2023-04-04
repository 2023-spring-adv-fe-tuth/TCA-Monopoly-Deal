import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamestart',
  templateUrl: './gamestart.page.html',
  styleUrls: ['./gamestart.page.scss'],
})
export class GamestartPage implements OnInit {

  constructor() { }

  ngOnInit() {

    const playersList = [

      {
        "name": "Sujal",
        "wins": 0,
        "lose": 0,
        "win_streak":0,
        "lose_streak": 0
      },
      {
        "name": "Pinal",
        "wins": 0,
        "lose": 0,
        "win_streak":0,
        "lose_streak": 0
      },
      {
        "name": "Rihan",
        "wins": 0,
        "lose": 0,
        "win_streak":0,
        "lose_streak": 0
      },
      {
        "name": "Pratik",
        "wins": 0,
        "lose": 0,
        "win_streak":0,
        "lose_streak": 0
      },


    ];
    console.table(playersList);





  }

}
