<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-700">
                <div class="text-gray-300 text-xl">Posts</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton
                        btnText="Create Post"
                        color="green"
                        url="/account/create-post"
                    />
                </div>
            </div>
        </div>

        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                
                <div class="max-w-sm border  border-gray-900 rounded-lg">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://via.placeholder.com/500" alt="" />
                    </a>
                    <div class="p-2 md:p-4">
                        <div class="text-lg">
                            <router-link
                                to=""
                                class="
                                    underline
                                    text-blue-500
                                    hover:text-blue-600
                                "
                            >
                                Test Title
                            </router-link>
                        </div>
                        <p class="py-3 text-white">Location: Test Location</p>
                        <p class="text-gray-300 text-md">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur illum ipsum totam id maiores sed voluptas, libero fugit. Explicabo perspiciatis libero et nam molestiae ab quas modi quos architecto ex.
                        </p>
                        <div class="mt-2 flex items-center justify-end">
                            <router-link
                                to=""
                                class="
                                    bg-blue-500
                                    hover:bg-blue-700
                                    text-white
                                    text-sm
                                    font-bold
                                    py-2
                                    px-3
                                    rounded-full
                                "
                            >
                                Edit Post
                            </router-link>
                            <button
                                class="
                                    ml-2
                                    bg-red-500
                                    hover:bg-red-700
                                    text-white
                                    text-sm
                                    font-bold
                                    py-2
                                    px-3
                                    rounded-full
                                "
                            >
                                Delete Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
</script>

<style>

</style>