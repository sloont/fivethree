import Phaser from 'phaser';

const TILESHEET: number[] = [
    0x2d2f35,
    0x0088a9,
    0xff5301
];

const TILE_ALPHA: number = 0.5;

export class Tile extends Phaser.GameObjects.Graphics {

    private readonly _tileIndex: [number, number];

    constructor(
        scene: Phaser.Scene,
        position: Phaser.Geom.Point,
        index: [number, number]
    ) {
        super(
            scene,
            {
                x: position.x,
                y: position.y
            }
        );

        this._tileIndex = index;
        this.lineStyle(3, 0x24252a, 1.0);
        this.fillStyle(0x0088a9, TILE_ALPHA);
        this.fillRect(0, 0, 64, 64);
        this.strokeRect(0, 0, 64, 64);

        this.setPosition(this.x-32, this.y-32)

        scene.add.existing(this);
    }

    get tileIndex(): [number, number] {
        return this._tileIndex;
    }
}