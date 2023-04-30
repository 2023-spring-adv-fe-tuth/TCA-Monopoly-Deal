import { Injectable } from '@angular/core';
import { Player } from './player';
import { Game } from './player';
import { Storage } from '@ionic/storage-angular';
//Player List
const playerList: Player[] = [

  {
    name: "Sujal",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Jimmy",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Andrew",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Samantha",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Connor",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Shane",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },
  {
    name: "Rudy",
    wins: 0,
    loses: 0,
    win_streak: 0,
    lose_streak: 0
  },


];

//Games
const gameList: Game[] = [{
    players: ["Sujal", "Jimmy"],
    winner: "Sujal",
    startTime: "",
    endTime: "",
    duration: "",
    current: false
  },
  {
    players: ["Sujal", "Jimmy", "Connor"],
    winner: "Sujal",
    startTime: "",
    endTime: "",
    duration: "",
    current: false
  },
  {
    players: ["Sujal", "Jimmy", "Andrew"],
    winner: "Sujal",
    startTime: "",
    endTime: "",
    duration: "",
    current: false
  }

];
const currentPlayerList: Player[] = [];
const testString = "TEST";


@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private storage: Storage) {
    
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    await this.storage.set("name", 'Sujal');
    const name = await this.storage.get('name');
    console.log(name);
    await this.storage.set("players", playerList);
    const pl = await this.storage.get("players");
    console.log(pl);
  }




  
  /*************************************************************/
  returnPlayerList = () => {
    return playerList;
  }

  /*************************************************************/
  selectedPlayers = (currentPlayerList: Player[]) => {
    currentPlayerList = currentPlayerList;
    console.log(currentPlayerList);
  };

  /*************************************************************/
  returnCurrentGame = () => {
    return currentPlayerList;
  };

  /*************************************************************/
  getPlayerNamesFromCurrentGame = () => {
    var array = ["Sujal", "Pratik"];
    return array;
  }

  /*************************************************************/
  createGame = () => {
    const newGame: Game = {
      players: ["Sujal", "Pratik"],
      winner: "Sujal",
      startTime: "",
      endTime: "",
      duration: "",
      current: false
    }
  }

  /*************************************************************/
  //Local Forage Testing



}
