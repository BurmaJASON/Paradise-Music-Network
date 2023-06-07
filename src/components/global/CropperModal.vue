<template>
    
    <div class="relative z-10 ">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <div class="fixed inset-0 z-10 overflow-y-auto mt-6">

            <div class="flex min-h-full items-end justify-center p-4 items-center py-2">
                <div
                    class="
                        relative
                        transform
                        overflow-hidden
                        rounded-lg
                        bg-white
                        text-left
                        shadow-xl
                        transition-all
                        my-8
                        mt-10
                        max-w-4xl
                    "
                >
                    <div class="bg-white px-4 pt-5 pb-4 p-6">
                        <div class="flex items-center">
                            <div class="mt-3 text-left">
                                <h3 class="text-2xl font-medium leading-6 text-gray-900">
                                    Crop Image
                                </h3>
                                <div class="flex flex-wrap my-4">
                                    <label class="
                                                block
                                                uppercase
                                                tracking-wide
                                                text-gray-700
                                                text-x
                                                font-bold
                                                mb-2
                                            "
                                    >
                                        Select Image
                                    </label>
                                    <div class="mb-3 w-full">
                                        <input 
                                        class="
                                                form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white 
                                                bg-clip-padding
                                                border
                                                border-solid
                                                border-gray-400
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700
                                                focus:bg-white
                                                focus:border-blue-600
                                                focus:outline-none
                                            "
                                        type="file"
                                        id="image"
                                        ref="fileInput"
                                    >
                                    </div>
                                </div>
                                <div class="pb-3 flex flex-row-reverse px-4">
                                    <button 
                                        type="button"
                                        class="
                                            inline-flex
                                            w-full
                                            justify-center
                                            rounded-md
                                            border
                                            border-transparent
                                            bg-blue-600
                                            px-4
                                            py-2
                                            text-white
                                            text-base
                                            font-medium
                                            shadow-sm
                                            hover:bg-blue-700
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-blue-500
                                            focus:ring-offset-2
                                            ml-3
                                            w-auto
                                            text-sm
                                        "
                                    >
                                        Crop Image
                                    </button>
                                    <button 
                                        type="button"
                                        class="
                                            inline-flex
                                            w-full
                                            justify-center
                                            rounded-md
                                            border
                                            border-transparent
                                            bg-red-600
                                            px-4
                                            py-2
                                            text-white
                                            text-base
                                            font-medium
                                            shadow-sm
                                            hover:bg-red-700
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-red-500
                                            focus:ring-offset-2
                                            ml-3
                                            w-auto
                                            text-sm
                                        "
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
                  
</template>


<script setup>
    // import {defineProps, toRefs } from 'vue'

    // const props = defineProps({
    //     btnText : String,
    //     label : String        
    // })

    // const { btnText, label  } = toRefs(props)

    



</script>