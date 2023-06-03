<template>

    <button 
        class="
            float-right
            mt-2
            inline-block
            bg-green-500
            hover:bg-green-700
            font-bold
            text-white
            no-underline
            px-4
            py-3
           
        " 
        @click="$emit('submit',true)"
    >
        {{ btnText }}
    </button>
                  
</template>
<!-- hover:bg-transparent
border-transparent -->

<script setup>
    import {defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText : String,
    })

    const { btnText } = toRefs(props)

    



</script>