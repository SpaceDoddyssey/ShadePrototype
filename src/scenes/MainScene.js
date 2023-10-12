class MainScene extends Phaser.Scene {
    constructor(){
        
    }

    preload() {
        this.add.text(game.config.width / 2, game.config.height / 2.5, 'Loading...').setOrigin(0.5, 0.5);
        this.load.path = './assets/';
    }


}
