<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import PokemonCard from './components/PokemonCard.vue'
import { ref, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import type { PokemonInterface } from './interfaces/index'

const pokemons = ref<PokemonInterface[]>([])

watchEffect(() => {
  console.log(pokemons.value)
})
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
onMounted(async () => {
  const response = await axios.get(url)
  pokemons.value = response.data.results

  pokemons.value.forEach(async (pokemon) => {
    const response = await axios.get(pokemon.url)
    pokemon.id = response.data.id
    pokemon.base_experience = response.data.base_experience
    pokemon.height = response.data.height
    pokemon.weight = response.data.weight
    pokemon.sprites = response.data.sprites.front_default
  })
})

</script>
<template>
  <Navbar></Navbar> 
  <div class="bg-gradient-to-l from-blue-300 to-blue-700">
    <div class="flex flex-col space-y-2 items-center justify-center">
      <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon"/>
    </div>
  </div>
</template>

<style scoped>

</style>
