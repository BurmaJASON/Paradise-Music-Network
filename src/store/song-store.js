// stores/counter.js
import axios from 'axios';
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => ({
    artistId : null,
    artistName : null,
    songs:[]
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {

    async fetchSongsByUserId(userId) {
        let res = await axios.get('api/user/' + userId + '/songs');
        this.$state.artistId = res.data.artist_id;
        this.$state.artistName = res.data.artist_name;
        if(res.data.songs) {
          this.$state.songs = res.data.songs;
        }
    },

    clearSongs() {
        this.$state.songs = [];
        this.$state.artistId = null;
        this.$state.artistName = null;
    }
  },
  persist: true
})