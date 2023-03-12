import { Card, Hero, HeroPower, Minion, Weapon } from "./entities";

export interface FullGameState {
    activePlayer: PlayerID;
    winningPlayer: PlayerID | null;
    players: Players;
}

export interface PlayerGameState {
    isActivePlayer: boolean;
    isWinningPlayer: boolean | null;
    player: PlayerState;
    opponent: SharedPlayerState;
}

export type PlayerID = keyof Players;

export type Players = [FullPlayerState, FullPlayerState];

export interface FullPlayerState extends PlayerState {
    deck: Card[];
}

export interface PlayerState extends SharedPlayerState {
    hand: Card[];
}

export interface SharedPlayerState {
    hero: Hero;
    heroPower: HeroPower;
    minions: Minion[];
    weapon?: Weapon;
}