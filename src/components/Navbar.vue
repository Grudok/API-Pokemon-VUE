<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import SearchBar from './SearchBar.vue'
import axios from 'axios'
import type { PokemonInterface } from '../interfaces/index'

const searchTerm = ref("")

const emit = defineEmits<{
    (event: 'searchTermChanged', value: string): void;
}>()

watchEffect(() => {
    emit('searchTermChanged', searchTerm.value)
})

</script>

<template>
    <nav class="bg-gradient-to-l from-red-300 to-red-600 flex flex-row items-center p-4 gap-4 mb-2">
        <img class="w-36" src="../assets/Pokemon-Logo.png" alt="Pokemon-Logo">
        <h2 class="text-white uppercase underline">POKEMON</h2>
        <SearchBar v-model="searchTerm" label="Search Pokemon" placeholder="Search Pokemon"/>
    </nav>
</template>

<style scoped></style>