<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-700">
                <div class="text-gray-300 text-xl">Youtube Videos</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton class="ml-2"
                        btnText="Delete Youtube Video"
                        color="red"
                        url="/account/delete-youtube-video"
                    />
                    <RouterLinkButton
                        btnText="Add Youtube Video"
                        color="green"
                        url="/account/add-youtube-video"
                    />
                </div>
            </div>
        </div>

        <div class="flex flex-wrap mb-4">
            <div v-for="video in videoStore.videos" :key="video" class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                <div class="text-xl text-gray-300">{{ video.title }}</div>
                <iframe  :src="video.url"></iframe>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
    import { useVideoStore } from '@/store/video-store';
    import { useUserStore } from '@/store/user-store';
    import { onMounted } from 'vue';

    const videoStore = useVideoStore();
    const userStore =  useUserStore();

    onMounted(() => {
        videoStore.fetchVideosByUserId(userStore.id);
    })
</script>

<style>

</style>