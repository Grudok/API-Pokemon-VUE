<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import axios from 'axios'
import type { PokemonInterface } from '../interfaces/index'


</script>


<template>
    <nav class="bg-gradient-to-l from-blue-300 to-blue-600 flex flex-row items-center p-4 gap-4 mb-2">
        <img class="w-36" src="../assets/Pokemon-Logo.png" alt="Pokemon-Logo">
        <h2 class="text-white uppercase underline">POKEMON</h2>
    </nav>
</template>

<style scoped></style>