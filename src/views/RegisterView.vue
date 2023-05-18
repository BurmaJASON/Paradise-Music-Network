<template>
  <div id="Register">
    <div class="w-full p-6 flex justify-center items-center">
       <div class="w-full max-w-xs">
           <div class="bg-white p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-black font-thin">Let's get rocking!</h1>
                <div class="mb-4">
                   <TextInput 
                        label="First Name"
                        :labelColor = "false"
                        placeholder = "John"
                        v-model:input="firstName"
                        inputType="text"
                        error="This is a text error"
                   />
                </div>

                <div class="mb-4">
                   <TextInput 
                        label="Last Name"
                        :labelColor = "false"
                        placeholder = "Doe"
                        v-model:input="lastName"
                        inputType="text"
                        error="This is a text error"
                   />
                </div>

                <div class="mb-4">
                   <TextInput 
                        label="Email"
                        :labelColor = "false"
                        placeholder = "johnjoe@email.com"
                        v-model:input="email"
                        inputType="text"
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

                <div class="mb-4">
                   <TextInput 
                        label="Confirm Password"
                        :labelColor = "false"
                        placeholder = "password123?"
                        v-model:input="confirmPassword"
                        inputType="password"
                   />
                </div>

                <button 
                    class="
                        block
                        w-full
                        bg-blue-500
                        text-white
                        rounded-sm
                        py-3
                        text-sm
                        tracking-wide
                    "
                    type="submit"
                >
                Register
                </button>
           </div>
           <p class="text-center text-md text-gray-300">
                Already have an account?
                <router-link to="login" class="text-green-500 no-underline hover:underline">
                    Login
                </router-link>
           </p>
       </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    import TextInput from "../components/global/TextInput.vue"

    let firstName = ref(null)
    let lastName = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)

</script>

<style>

</style>