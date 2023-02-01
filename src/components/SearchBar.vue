<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
    placeholder?: string;
    label?: string;
    modelvalue?: string;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();

const value = computed({
    get() {
        return props.modelvalue || ''
    },
    set(value: string) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <label v-if="label" :for="label" class="text-white">{{ label }}</label>
        <input :name="label" class="bg-gray-200 rounded-md" type="text" :placeholder="placeholder" v-model="value">
    </div>
</template>



<style scoped></style>