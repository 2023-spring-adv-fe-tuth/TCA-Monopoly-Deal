//Players section
export interface Player {
    name: string,
    wins: number,
    loses: number,
    win_streak: number,
    lose_streak: number
};




export interface Game {

    players: string[],
    winner: string,
    startTime : string,
    endTime: string,
    duration: string

}



