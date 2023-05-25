<template>

    <router-link 
        class="
            float-right
            bg-green-500
            text-white
            font-semibold
            hover:text-white
            py-2
            px-4
            border
            hover:border-green-500
            rounded
            hover:bg-transparent
            border-transparent
        " 
        :class="[color ? 'hover:bg-' + color + 'border-' + color : '' ]"
        :to="url"
    >
        {{ btnText }}
    </router-link>
                  
</template>

<script setup>
    import {defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText : String,
        url : String,
        color : String
    })

    const { btnText, url, color } = toRefs(props)

    



</script>