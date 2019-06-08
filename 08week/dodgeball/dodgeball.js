'use strict'

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]


  
  const listOfPlayers = [];
  const blueTeam = []
  const redTeam = []
  

  class Player {
    constructor(people){
        this.id = people.id;
        this.name = people.name;
        this.age = people.age;
        this.skillSet = people.skillSet;
        this.placeBorn = people.placeBorn;
        this.canThrowBall = false;
        this.canDodgeBall = false;
        this.hasPaid = false;
        this.isHealthy = false;
        this.yearsExperience = false;
        this.isPlayer = false;
    }
  }

  const listPersons = arrOfPeople.map(people => new Player(people))


console.log(listPersons)


function createPlayersList(){
    playersList.innerHTML = listPersons
}

  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    const clickedPlayer = listPersons.find(listPersons => listPersons.id === id).isPlayer = true;
    console.log(clickedPlayer)
    console.log(`li ${id} was clicked!`)

  }


  const listDodgeballPlayers = () => {
      const realPLayers = listPersons.filter(listPersons => listPersons.isPlayer === true);
  
      
      realPLayers.map(function(arr){
        players.innerHTML = arr.name + "<button>"+ "Add to blue team" + "</button>"+ "<button>"+ "Add to red team" + "</button>"
})

  }
  
  const assert = require('assert');
  if (typeof describe === 'function') {
        describe('Player', function(){
        it('can become a player', function(){
          let player1 = new Player('2', 'Charles Young', '55', 'welding', 'Omaha, Nebraska');
          assert.equal(player1.id, '2');
          assert.equal(player1.name, 'Charles Young');
          assert.equal(player1.age, '55');
          assert.equal(player1.skillSet, 'welding');
        });
    });
  }