<script lang="ts">
    import { onMount } from 'svelte/internal';

    export let game;

    onMount(async (): Promise<void> => {

        game = { game } = await import ('$lib/phaser/game');

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
