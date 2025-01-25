import Team from "../team";
import Heroe from "../heroes";
import Character from "../character";

const person = {name : 'Bowman', type : 'Bowman'};

const persons =[
    {name : 'Daemon', type : 'Daemon'},
    {name : 'Swordsman', type : 'Swordsman'},
    {name : 'Magician', type : 'Magician'},
    {name : 'Bowman', type : 'Bowman'}
];

test('adding one member to the Team object', () => {
    const team = new Team;
    team.add(person);

    const expected = [ 
        new Heroe({ name: 'Bowman', type: 'Bowman' }) 
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

test('adding a duplicate member to the Team object (error)', () => {

    const team = new Team;
    team.add(person);
    
    expect(() => team.add(person)).toThrow(Error);
  
});

test('adding miltiple members to the Team object', () => {
    const team = new Team;
    team.addAll(persons);

    const expected = [ 
        new Heroe({ name: 'Daemon', type: 'Daemon', attack: 10, defence: 30, health: 100, level : 1  }),
        new Heroe({ name: 'Swordsman', type: 'Swordsman', attack: 40, defence : 10, health : 100, level : 1 }), 
        new Heroe({ name: 'Magician', type: 'Magician', attack: 10, defence : 40, health : 100, level : 1 }),
        new Heroe({ name: 'Bowman', type: 'Bowman', attack: 25, defence : 25, health : 100, level : 1 })
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

test('pass a duplicate error when adding multiple members to the Team object', () => {
    const team = new Team;
    team.add(person);
    team.addAll(persons);

    const expected = [ 
        new Heroe({ name: 'Bowman', type: 'Bowman', attack: 25, defence : 25, health : 100, level : 1 }),
        new Heroe({ name: 'Daemon', type: 'Daemon', attack: 10, defence: 30, health: 100, level : 1  }),
        new Heroe({ name: 'Swordsman', type: 'Swordsman', attack: 40, defence : 10, health : 100, level : 1 }), 
        new Heroe({ name: 'Magician', type: 'Magician', attack: 10, defence : 40, health : 100, level : 1 })
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

test('iterator', () => {
    const team = new Team;
    team.addAll(persons);

    const expected = [ 
        new Heroe({ name: 'Daemon', type: 'Daemon', attack: 10, defence: 30, health: 100, level : 1  }),
        new Heroe({ name: 'Swordsman', type: 'Swordsman', attack: 40, defence : 10, health : 100, level : 1 }), 
        new Heroe({ name: 'Magician', type: 'Magician', attack: 10, defence : 40, health : 100, level : 1 }),
        new Heroe({ name: 'Bowman', type: 'Bowman', attack: 25, defence : 25, health : 100, level : 1 })
    ];
    
    const received = [];

    for (let teamMate of team) {
        received.push(teamMate);
    }

    expect(received).toEqual(expected);
  
});

test('generator', () => {
    const team = new Team;
    team.addAll(persons);

    const expected = [ 
        new Heroe({ name: 'Daemon', type: 'Daemon', attack: 10, defence: 30, health: 100, level : 1  }),
        new Heroe({ name: 'Swordsman', type: 'Swordsman', attack: 40, defence : 10, health : 100, level : 1 }), 
        new Heroe({ name: 'Magician', type: 'Magician', attack: 10, defence : 40, health : 100, level : 1 }),
        new Heroe({ name: 'Bowman', type: 'Bowman', attack: 25, defence : 25, health : 100, level : 1 })
    ];
    
    const received = [];

    let generator = team.generateTeammates();

    for (let teamMate of generator) {
        received.push(teamMate);
    }


    expect(received).toEqual(expected);
  
});

