<template>
   <div class="p-2">
        <div class="container max-w-4xl mx-auto flex mt-10">
            <div class="w-1/3">
                <img :src="profileStore.image" class="w-full rounded-lg h-auto shadow-lg" alt="Profile Pic">
            </div>
            <div class="w-full pl-4">
                <div class="flex">
                    <div class="w-1/2">
                        <h1 class="text-2xl md:text-4xl text-left text-gray-300">
                            {{ profileStore.firstName }} {{ profileStore.lastName }}
                        </h1>
                        <span class="text-md text-gray-500">
                            <i><b>{{ profileStore.location }}</b></i>
                        </span>
                    </div>   
                    <div class="w-1/2 mt-2" v-if="userStore.id == route.params.id">
                        <RouterLinkButton
                            btnText="Edit Profile"
                            color="green"
                            url="/account/edit-profile"
                        />
                    </div>   
                </div>
                <ProfileInfoSection/>
                <ProfileAboutSection/>
            </div>
        </div>
        <SongsSection/>
        <YoutubeVideosSection/>
        <PostsSection/>
   </div>
</template>

<script setup>
import ProfileInfoSection from '../../components/partials/profile/ProfileInfoSection'
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue'
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
import SongsSection from '@/components/partials/profile/SongsSection.vue'
import YoutubeVideosSection from '@/components/partials/profile/YoutubeVideosSection.vue'
import PostsSection from '@/components/partials/profile/PostsSection.vue'
import { useUserStore } from '@/store/user-store';
import { onMounted } from 'vue';
import { useProfilestore } from '@/store/profile-store';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const profileStore = useProfilestore();
const route = useRoute()



onMounted(async() => {
    await profileStore.fetchProfileById(route.params.id)
})



</script>

<style>

</style>