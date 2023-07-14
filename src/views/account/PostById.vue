<template>
    <div v-if="post" class="container mx-auto max-w-4xl py-6 px-3">
        <div class="text-gray-300 text-xl">Post By ID / {{ post.id }}</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>
        <div class="mx-auto">
            <div class="my-4">
                <div class="flex items-center py-2">
                    <router-link :to="'/account/profile/' + post.user.id">
                        <img :src="post.user.image ? userStore.userImage(post.user.image) : defaultProfile" class="rounded-full" width="50">
                    </router-link>
                    <router-link :to="'/account/profile/' + post.user.id">
                        <div class="ml-2 font-bold text-2xl text-gray-300">{{ post.user.first_name }} {{ post.user.last_name }}</div>
                    </router-link>
                </div>
                <img class="w-full" :src="postStore.postImage(post.image)" alt="">
                <div class="p-4">
                    <p class="text-3xl font-bold text-gray-500 hover:text-gray-600 pb-4">{{ post.title }}</p>
                    <p class="text-gray-400 py-2 text-lg">Event Location: {{ post.location }}</p>
                    <p class="pb-6 text-gray-200">
                        {{ post.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import { usePostStore } from "@/store/post-store";
    import { useUserStore } from "@/store/user-store";

    const userStore = useUserStore();
    const postStore = usePostStore();
    const route = useRoute();
    let post = ref(null);
    const defaultProfile = process.env.VUE_APP_URL + 'DefaultUserAvatar.webp';


    onMounted(async () => {
        await getPostById();
    })

    const getPostById = async() => {

        try{
            let res = await axios.get('api/posts/' + route.params.id);
            post.value = res.data;
        }catch(err) {
            console.log(err);
        }

    }

</script>
