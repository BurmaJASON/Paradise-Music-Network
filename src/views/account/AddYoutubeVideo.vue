<template>
  <div id="AddYoutubeVideo" class="container mx-auto max-w-4xl pt-20 px-6">
    <div class="text-gray-300 text-xl">Add Youtube Video</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>
    <TextInput 
    class="mb-6"
        label="Title"
        placeholder = "Cool New Video"
        v-model:input="title"
        inputType="text"
        :error="errors.title ? errors.title[0] : ''"
    />

    <TextInput 
    class="mb-2"
        label="Video URL"
        placeholder = "PL3pX4NAc7vJt_j7S-Aefxx"
        v-model:input="videoCode"
        inputType="text"
        :error="errors.url ? errors.url[0] : ''"

    />

    <SubmitFormButton 
        btnText="Add Video"
        @submit="addYoutubeVideoLink"
    />

  </div>
</template>

<script setup>
  import TextInput from '../../components/global/TextInput.vue'
  import SubmitFormButton from '../../components/global/SubmitFormButton.vue'
  import { ref } from 'vue';
  import axios from 'axios';
  import { useUserStore } from '@/store/user-store';
  import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

    const userStore = useUserStore();
    const router = useRouter();

    let errors = ref([]);
    let title = ref(null);
    let videoCode = ref(null);

    const addYoutubeVideoLink = async() => {
      errors.value = [];

      try { 
        await axios.post('api/youtube', {
          user_id : userStore.id,
          title : title.value,
          url : videoCode.value,
        })

        Swal.fire(
            'New Video Added!',
            'Your added a video with the name "' + title.value + '"' ,
            'success'
        )
        router.push('/account/profile/' + userStore.id);

      }catch (err) {
        errors.value = err.response.data.errors;
        console.log('err addYoutubeLink' , err);
      }
    }


</script>