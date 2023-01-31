<script setup lang="ts">
import { onMounted, watch, watchEffect } from 'vue';
import type { PokemonInterface } from '../interfaces/PokemonInterface';

defineProps<{
    pokemon: PokemonInterface;
}>();

</script>

<template>
<div class="flex p-6 gap-8 w-full bg-gradient-to-l from-blue-600 to-blue-900 rounded-md">
    <div class="text-white flex items-center gap-6">
        <img class="w-36" :src="pokemon.sprites" alt="Pokemon-Logo">
        <h2 class="uppercase">Name: {{ pokemon.name }}</h2>
        <p class="p">ID: {{ pokemon.id }}</p>
        <p class="p">EXP: {{ pokemon.base_experience }}</p>
        <p class="p">height: {{ pokemon.height }}</p>
        <p class="p">weight: {{ pokemon.weight }}</p>
    </div>
</div>
</template>
<style scoped></style>