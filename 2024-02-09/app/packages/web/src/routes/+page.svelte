<script lang="ts">
	import { onMount } from "svelte";

  let loading = true;
  let pokemons: { name: string, url: string }[] = [];

  const getPokemon = async () => {
    console.log('Trying to get pokemon...');
    const response = await fetch('/api/pokemon');
    const json = await response.json();

    if (response.status === 202) {
      console.log('No data...');
      setTimeout(getPokemon, json.retryIn)
    } else if (response.status === 200) {
      console.log('Got pokemon!');
      pokemons = json.results;
      loading = false;
    }
  }

  onMount(async () => {
    getPokemon();
  });
</script>

<main class="container">
  {#if loading}
    <progress />
  {/if}
  {#each pokemons as pokemon}
    <div>
      {pokemon.name}
    </div>
  {/each}
</main>
