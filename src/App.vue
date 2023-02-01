<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import PokemonCard from './components/PokemonCard.vue'
import { ref, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import type { PokemonInterface } from './interfaces/index'

const pokemons = ref<PokemonInterface[]>([])
const filter = ref({
  search: ''
})

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
  <Navbar @search-term-changed="(value) =>(filter.search = value)"/> 
  <div class="bg-gradient-to-l from-blue-300 to-blue-700">
    <div class="grid grid-cols-3 gap-4 px-2 py-2 m-4">
      <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon"/>
    </div>
  </div>
</template>

<style scoped>

</style>
