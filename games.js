const favoriteGames = [
    {name: 'Life', type: 'board game', numberOfPlayer: '2 to 4 players', rating: '4.6 on Amazon', shortDescription: 'Choose a life full of action adventure and unexpected surprises'},
    {name: 'Clue', type: 'board game', numberOfPlayer: '2 to 6', rating: '4.8 on Amazon', shortDescription: 'A murder in a mansion! Players have to find out who is responsible for the murder. Player who correctly guess Who What and Where wins the game.'},
    {name: 'Candyland', type: 'board game', numberOfPlayer: '2 to 4', rating: '4.8 on Amazon', shortDescription: 'Players encounter all kinds of delicious surprises as they move their gingerbread men around the path in a race to the castle!'},
];
console.log(favoriteGames);

const userPick = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
alert(' you selected the game ' + favoriteGames[userPick - 1].name + ' that is a ' + favoriteGames[userPick - 1].type + ' with ' + favoriteGames[userPick - 1].numberOfPlayer + ' with a rate of ' + favoriteGames[userPick - 1].rating + ' and is a ' + favoriteGames[userPick - 1].shortDescription);