import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name : string; 
    description : string ;
    //Added a Promise Callback
    callback : (state : State , ...args : string[]) => Promise<void>;
}

export type State = {
    readline : Interface ; 
    commands : Record<string , CLICommand>;
    //Added class and urls for State
    pokeAPI: PokeAPI;
    nextLocationsURL : string;
    prevLocationsURL : string;
}

export function initState(cacheInterval: number){
    const rl = createInterface({
        input : process.stdin, 
        output: process.stdout,
        prompt :"Pokedex > ", 
    });

    return {
        readline : rl, 
        commands : getCommands(),
        //Added return for ()
        pokeAPI : new PokeAPI(cacheInterval), 
        nextLocationsURL : "", 
        prevLocationsURL : "", 
    }
}

