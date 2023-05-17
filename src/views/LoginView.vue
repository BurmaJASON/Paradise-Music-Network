<template>
  <div id="Login">
    <div class="w-full p-6 flex justify-center items-center">
       <div class="w-full max-w-xs">
           <div class="bg-white p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-black font-thin">Let's get rocking!</h1>
                <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-500">
                        First Name
                    </label>
                    <input type="text" 
                    class="
                    appearance-none 
                    block
                    w-full 
                    bg-gray-300
                    text-gray-700
                    border-fray-400
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none  
                    focus:bg-gray-400
                    focus:border-gray-100
                    ">
                </div>
                <span class="text-red-500">
                    This is an error message
                </span>
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

<script>
export default {

}
</script>

<style>

</style>