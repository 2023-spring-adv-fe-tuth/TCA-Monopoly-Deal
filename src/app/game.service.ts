import { Injectable } from '@angular/core';
import { Player } from './player';
import { Game } from './player';

//Player List
const playerList : Player[] = [

  {
      name:"Sujal",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Jimmy",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Andrew",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Samantha",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Connor",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Shane",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },
  {
      name:"Rudy",
      wins: 0,
      loses: 0,
      win_streak:0,
      lose_streak:0
  },


];

//Games
const gameList : Game[] = [
  {
    players: ["Sujal","Jimmy"],
    winner: "Sujal",
    startTime : "",
    endTime: "",
    duration: "",
    current: false},
    {
      players: ["Sujal","Jimmy","Connor"],
      winner: "Sujal",
      startTime : "",
      endTime: "",
      duration: "",
      current: false
    },
    {
        players: ["Sujal","Jimmy","Andrew"],
        winner: "Sujal",
        startTime : "",
        endTime: "",
        duration: "",
        current: false
    }

];
const currentPlayerList : Player[] = [];


@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor() { }

  returnPlayerList = () =>{
    return playerList;
  }
  selectedPlayers = (currentPlayerList:Player[]) =>{
    currentPlayerList = currentPlayerList;
    console.log(currentPlayerList);

  };
  returnCurrentGame = () => {
    return currentPlayerList;
  }

  createGame = () => {
   
      
    
  }



}
