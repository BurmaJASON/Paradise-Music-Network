<template>
    <div class="container mx-auto max-w-4xl py-6 px-3">
        <div class="text-gray-300 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>
        <div class="mx-auto">
            <div v-for="post in posts" :key="post" class="my-4">
                <div class="flex items-center py-2">
                    <img :src="userStore.userImage(post.user.image)" class="rounded-full" width="50">
                    <div class="ml-2 font-bold text-2xl text-gray-300">{{ post.user.first_name }} {{ post.user.last_name }}</div>
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
            <div class="flex items-center justify-center p-2">

                <v-pagination
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getPosts"
                />

            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import { usePostStore } from "@/store/post-store";
    import { useUserStore } from "@/store/user-store";

    import VPagination from "@hennge/vue3-pagination";
    import "@hennge/vue3-pagination/dist/vue3-pagination.css";

    const userStore = useUserStore();
    const postStore = usePostStore();
    let posts = ref(null);
    let page = ref(1);
    let pageCount = ref(null);




    onMounted(async () => {
        await getPosts();
    })

    const getPosts = async() => {

        try{
            let res = await axios.get('api/posts?page=' + page.value);
            pageCount.value = res.data.page_count;
            posts.value = res.data.paginate.data;
        }catch(err) {
            console.log(err);
        }

    }

</script>

