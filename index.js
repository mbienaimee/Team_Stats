const team = {
    _players: [
        { firstName: 'reine', lastName: 'Marie', age: 30 },
        { firstName: 'aimee', lastName: 'Bienaimee', age: 31 },
        { firstName: 'Pete', lastName: 'Wheeler', age: 29 }
    ],
    _games: [
        {
            opponent: 'Team A',
            teamPoints: 20,
            opponentPoints: 15
        },
        {
            opponent: 'Team B',
            teamPoints: 25,
            opponentPoints: 22
        },
        {
            opponent: 'Team C',
            teamPoints: 18,
            opponentPoints: 20
        }
    ],

    addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(newPlayer);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(newGame);
    },

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    }
};

// Add a new player
team.addPlayer('Bugs', 'Bunny', 76);

// Log the team's players
console.log(team.players);

// Add a new game
team.addGame('Titans', 100, 98);

// Log the team's games
console.log(team.games);
