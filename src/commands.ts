import { commandPokedex } from "./commadn_pokedex.js";
import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandForward, commandMapBack } from "./command_map.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record <string , CLICommand> {
    return {
        help : {
            name : "help", 
            description : "Display a help message ", 
            callback : commandHelp
        }, 
        exit : {
            name: "exit", 
            description : "Exit the Pokedex", 
            callback: commandExit
        }, 
        map : {
            name : "map", 
            description : "Display the Maps in Pokedex", 
            callback : commandForward
        }, 
        mapb : {
            name : "mapb", 
            description : "Get the previous page of locations", 
            callback : commandMapBack,
        }, 
        explore : {
            name : "explore <location_name>", 
            description : "Explore a location", 
            callback : commandExplore
        }, 
        catch : {
            name : "catch", 
            description: "Attempt to catch a pokemon", 
            callback : commandCatch
        }, 
        inspect :{
            name : "inspect <pokemon_name>", 
            description : "View details about a caught pokemon", 
            callback : commandInspect
        }, 
        pokedex : {
            name : "pokedex", 
            description : "See all the pokemon you've caought", 
            callback : commandPokedex 
        }
    }
}