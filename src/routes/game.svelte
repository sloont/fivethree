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

    <!-- where we will place nested components (controls) -->
    <slot></slot>
</div>

<style>
    :global(body) {
        font-family: Arial, Helvetica, sans-serif;
        color: #edf0f1;
        background-color: #24252a;
    }
    #game-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    #game {
        width: 80vw;
        height: 80vh;
        /* border: 1px solid #0088a9; */
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 4px 4px 4px #000;
    }
</style>
