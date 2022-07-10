import Phaser from 'phaser';

export class gameScene extends Phaser.Scene {
    init(): void {
        const camera = this.cameras.main;

		this.scale.on(Phaser.Scale.Events.RESIZE, (
			gameSize: Phaser.Structs.Size,
			baseSize: Phaser.Structs.Size,
			displaySize: Phaser.Structs.Size,
			previousWidth: number,
			previousHeight: number
		) => {
			
		});
    }
    preload(): void {

    }

    create(): void {
		const grid = this.add.grid(
			0,
			0,
			document.getElementById('game')?.clientWidth,
			document.getElementById('game')?.clientHeight,
			30,
			30,
			0xffffff,
			0.7
		);
		
		grid.setDisplayOrigin(0.5, 0.5)

    }
}