let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#555555',
    autoCenter: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          x:0,
          y:0
        }
      }
    },
    scene:  [ MainScene ]
}

let game = new Phaser.Game(config);

// Reserve keyboard vars
let keyW, keyA, keyS, keyD

// Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
