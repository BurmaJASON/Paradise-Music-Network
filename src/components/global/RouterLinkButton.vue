<template>

    <router-link 
        class="
            float-right
            bg-transparent
            text-white
            font-semibold
            hover:text-white
            py-2
            px-4
            border
            hover:border-transparent
            rounded
           
        " 
        :class="[ color ? 'hover:bg-' + color + '-500 border-' + color + '-500' : '' ]"
        :to="url"
    >
        {{ btnText }}
    </router-link>
                  
</template>
<!-- hover:bg-transparent
border-transparent -->

<script setup>
    import {defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText : String,
        url : { type: String, default: ''},
        color : String
    })

    const { btnText, url, color } = toRefs(props)

    



</script>