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

        <div class="pb-4">
            
        </div>
    </div>
</template>

<script setup>
    import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
</script>

<style>

</style>