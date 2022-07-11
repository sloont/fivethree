import Phaser from 'phaser';

const TILESHEET: number[] = [
    0x2d2f35,
    0x0088a9,
    0xff5301
];

const TILE_ALPHA = 0.5;
const TEST_ANGLE = Math.atan(0.5);

function warp(angle: number /*radians*/, point: Phaser.Geom.Point, scene: Phaser.Scene): Phaser.Geom.Point {
    const transform = [Math.cos(angle), Math.sin(angle)];
    const origin = new Phaser.Geom.Point(0.5, 0.5);
    
        point.x = (point.x - point.y) * transform[0];
        point.y = (point.x + point.y) * transform[1];
    
        // const { width, height } = scene.sys.game.config;
        // point.x += Number(width) * origin.x;
        // point.y += Number(height) * origin.y;
    
    return point;
}

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


        const points: Phaser.Geom.Point[] = [
            new Phaser.Geom.Point(-32,-32),
            new Phaser.Geom.Point(32,-32),
            new Phaser.Geom.Point(32,32),
            new Phaser.Geom.Point(-32,32)
        ];

        for (let i = 0; i < points.length; i++) {
            warp(TEST_ANGLE, points[i], scene);
        }

        console.log(points);
        // this.lineStyle(3, 0x24252a, 1.0); => assumed
        this.fillStyle(0xff5301, TILE_ALPHA);
        this.fillPoints(points, true, true);
        this.strokePoints(points, true, true);

        this.setRotation(Math.PI - TEST_ANGLE)
        

        

        scene.add.existing(this);
    }

    get tileIndex(): [number, number] {
        return this._tileIndex;
    }
}