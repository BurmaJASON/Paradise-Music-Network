<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-700">
                <div class="text-gray-300 text-xl">Songs</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton class="ml-2"
                        btnText="Delete Song"
                        color="red"
                        url="/account/delete-song"
                    />
                    <RouterLinkButton
                        btnText="Add Song"
                        color="green"
                        url="/account/add-song"
                    />
                </div>
            </div>
        </div>

        <div class="pb-4">
            <SongPlayer/>
        </div>
    </div>
</template>

<script setup>
    import SongPlayer from './SongPlayer.vue';
    import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
</script>

<style>

</style>