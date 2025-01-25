import Heroe from "./heroes.js";
import _ from "lodash";

export default class Team {
    constructor() {
        this.members = new Set();
    };

    add(person, error = true) {
        const teammate = new Heroe(person);
        let errorThrower = false;

        this.members.forEach(member => {  
            if (_.isEqual(member, teammate)) {
                errorThrower = true;
            };
        }); 

        if (errorThrower) {
            if (error) {
                throw new Error('Этот персонаж уже добавлен');
            } else {
                return;
            };
        };

        this.members.add(new Heroe(person))

    };

    addAll(persons) {
        for (const person of persons) {
            this.add(person, false);
        };
    };

    toArray() {

        const membersArray = Array.from(this.members);

        return membersArray;
    };

    [Symbol.iterator]() {return this.toArray().values() };

    *generateTeammates() {
        const arrLength = this.toArray().length;
        for(let i = 0; i<arrLength; i++) {
           yield this.toArray()[i];
        }
    };
    

};

