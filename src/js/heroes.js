import Character from "./character.js";

const charactersAttack = { 
        'Bowman' : 25,
        'Swordsman': 40,
        'Magician': 10,
        'Undead': 25,
        'Zombie': 40,
        'Daemon': 10,
    };

const charactersArmor = {
        'Bowman' : 25,
        'Swordsman': 10,
        'Magician': 40,
        'Undead': 25,
        'Zombie': 10,
        'Daemon': 40,
    };

export default class Heroe extends Character { 
    constructor(data) {
        super(data);
        this.health = 100;
        this.level = 1;
        this.attack = charactersAttack[data.type];
        this.defence = charactersArmor[data.type];
    }
}