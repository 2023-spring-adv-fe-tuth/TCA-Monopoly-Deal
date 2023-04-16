import { Injectable } from '@angular/core';
import { Player } from './player';



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
@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor() { }

  returnPlayerList = () =>{
    return playerList;
  }

}
