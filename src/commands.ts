import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
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
        }
    }
}