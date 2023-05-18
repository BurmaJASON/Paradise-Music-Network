<template>
  <div id="Login">
    <div class="w-full p-6 flex justify-center items-center">
       <div class="w-full max-w-xs">
           <div class="bg-white p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-black font-thin">Let's get rocking!</h1>
                
                <div class="mb-4">
                    <TextInput 
                    label="Email"
                    :labelColor = "false"
                    placeholder = "johndoe@gmail.com"
                    v-model:input="email"
                    inputType="email"
                    error="This is a text error"
                    />
                </div>
                
                <div class="mb-4">
                   <TextInput 
                        label="Password"
                        :labelColor = "false"
                        placeholder = "password123?"
                        v-model:input="password"
                        inputType="password"
                        error="This is a text error"
                   />
                </div>

                <button 
                    class="
                        block
                        w-full
                        bg-green-500
                        text-white
                        rounded-sm
                        py-3
                        text-sm
                        tracking-wide
                    "
                    type="submit"
                >
                Login
                </button>
           </div>
           <p class="text-center text-md text-gray-300">
                Don't have an account yet?
                <router-link to="register" class="text-blue-500 no-underline hover:underline">
                    Register
                </router-link>
           </p>
       </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    import TextInput from "../components/global/TextInput.vue"

    let email = ref(null)
    let password = ref(null)

</script>

<style>

</style>