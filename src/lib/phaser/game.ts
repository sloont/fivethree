import Phaser from 'phaser';

class Example extends Phaser.Scene {

    protected controls!: Phaser.Cameras.Controls.SmoothedKeyControl;
    protected grid!: Phaser.GameObjects.Grid;

    constructor() {
        super({ key: 'Example' });
    }

    preload(): void {

    }

    create() {

        this.grid = this.add.grid(
            0,
            0,
            200,
			200,
			50,
			50,
			0xffffff,
			1,
            0x000000
        )

        .setOrigin(0.5)
        console.log(this.input);
        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        const cam = this.cameras.main;

        this.scale.on(Phaser.Scale.Events.RESIZE, (gameSize: Phaser.Structs.Size) => {
            this.grid.setPosition(gameSize.width / 2, gameSize.height / 2)
                .setOrigin(0.5);
        });
    }

    update(time: number, delta:number) {

        this.controls.update(delta);
        this.grid.setPosition(this.grid.x + 0.1, this.grid.y + 0.1);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#ffffff',
    scale: {
        width: 800,
        height: 600,
        mode: Phaser.Scale.ScaleModes.RESIZE,
        autoRound: true,
        resizeInterval: 100
    },
    scene: [Example]
};

export const game = new Phaser.Game(config);
