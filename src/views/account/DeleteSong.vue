<template>
  <div id="DeleteSong" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-300 text-xl">Delete Song</div>
    <div class="bg-red-500 w-full h-1 mb-4"></div>
    
    <div class="bg-white rounded px-8 pt-6 pb-8">
        <div class="flex flex-wrap" v-for="(song,index) in songStore.songs" :key="song.id">
            <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
                {{ ++index }}  {{ song.title }}
            </div>
            <div class="w-1/4 ml-auto p-1">
                <button 
                    @click="deleteSong(song)"
                    class="
                        float-right
                        bg-transparent
                        hover:bg-red-500    
                        text-gray-900
                        hover:text-white
                        font-semibold
                        py-2
                        px-4
                        border
                        border-red-500
                        hover:border-transparent
                        rounded
                    "
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
    
    

  </div>
</template>

<script setup>

import { useUserStore } from "@/store/user-store";
import { useSongStore } from "@/store/song-store";
import axios from "axios";
import Swal from "sweetalert2";

const songStore = useSongStore();
const userStore = useUserStore();

const deleteSong = async (song) => {
    Swal.fire({
        title: '<strong>Are you sure you want to delete this?</strong>',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Yes, Delete it!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then(async (result) => {
        if(result.isConfirmed) {
            try {
                await axios.delete('api/songs/' + song.id + '/' + userStore.id);

                songStore.fetchSongsByUserId(userStore.id);

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.' ,
                    'success'
                )
                
            }catch (err) {
                console.log(err);
            }
        }
    });

    
}

</script>

