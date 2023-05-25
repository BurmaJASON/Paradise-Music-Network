<template>
    <div class="container max-w-4xl mx-auto flex">
        <div class="w-1/3">
            <img src="https://via.placeholder.com/500" class="w-full rounded-lg h-auto shadow-lg" alt="Profile Pic">
        </div>
        <div class="w-full pl-4">
            <div class="flex">
                <div class="w-1/2">
                    <h1 class="text-2xl md:text-4xl text-left text-gray-300">
                        John Doe
                    </h1>
                    <span class="text-md text-gray-500">
                        <i><b>London, UK</b></i>
                    </span>
                </div>   
                <div class="w-1/2 mt-2">
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
                        to=""
                    >
                        Edit Profile
                    </router-link>
                </div>   
            </div>
            <ProfileInfoSection></ProfileInfoSection>
            <ProfileAboutSection></ProfileAboutSection>
        </div>
    </div>
</template>

<script setup>
import ProfileInfoSection from '../../components/partials/profile/ProfileInfoSection'
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue'

</script>

<style>

</style>