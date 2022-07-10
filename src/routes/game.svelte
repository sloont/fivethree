<script lang="ts">
    import { onMount } from 'svelte/internal';

    export let game;

    onMount(async (): Promise<void> => {
        await import('phaser');
        const { gameScene } = await import ('$lib/scenes/gameScene');

        const config = {
            type: Phaser.AUTO,
            scale: {
                width: 800,
                height: 600,
                parent: 'game',
                mode: Phaser.Scale.ScaleModes.RESIZE,
                autoRound: true,
                resizeInterval: 100,
            },
            scene: [gameScene]
        };

        game = new Phaser.Game(config)
    });

</script>

<div id='game-wrapper'>
    <h1>brain turning</h1>
    <div id='game'></div>
</div>

<style>
    #game-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    #game {
        width: 80vw;
        height: 80vh;
    }
</style>
