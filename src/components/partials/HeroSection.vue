<template>
  <div id="centerCallToAction" class="max-w-5xl">
    <div class="px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-5xl leading-tight text-center text-gray-100 mb-3">
            <b>Paradise Music Network</b>
        </h1>
        <p class="py-4 text-xl text-center text-gray-300">
            Discover, Share, and Enjoy: Your ultimate music sanctuary at Paradise Music Social Network!
        </p>
    </div>
    <div class="mt-6"></div>
    <div class="text-center " v-if="userStore.id">
        <router-link :to="'/account/profile/' + userStore.id" class="w-full bg-white text-dark text-1xl hover:text-2xl hover:bg-black hover:text-white py-2 px-7  cursor-pointer rounded-lg transition-all duration-200 ease-in-out">
            Let's Rock &rarr;
        </router-link>
    </div>
    <div class="flex justify-between" v-if="!userStore.id" >
        <router-link to="login" class="w-full mr-1 py-2 px-4 bg-green-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer text-center">
            Login
        </router-link>
        <router-link to="register" class="w-full mr-1 py-2 px-4 bg-blue-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer text-center">
            Register
        </router-link>
    </div>
  </div>


  <div id="videoDarkOverlay"></div>
  <video id="myVideo" autoplay muted loop>
    <source src="../../../public/Concert.mp4" type="video/mp4">
  </video>
</template>

<script setup>
    import { useUserStore } from '@/store/user-store';

    const userStore = useUserStore();
</script>

<style lang="scss">
    #centerCallToAction{
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    #myVideo {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
    }

    #videoDarkOverlay {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-color: rgba(0,0,0,0.65);
    }
</style>