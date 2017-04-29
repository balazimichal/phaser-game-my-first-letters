var game = new Phaser.Game(1280, 800, Phaser.AUTO);
var initialPlay = true;

game.state.add('BootState', BootState);
game.state.add('PreloadState', PreloadState);
game.state.add('HomeState', HomeState);
game.state.add('GameState', GameState);
game.state.start('BootState');