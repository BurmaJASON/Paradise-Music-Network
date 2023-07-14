<template>
    <div id="EditPost" class="container max-w-4xl mx-auto py-20 px-6">
        <div class="text-gray-300 text-xl">Edit Post</div>
        <div class="bg-green-500 w-full h-1"></div>
        <CropperModal
            v-if="showModal"
            :minAspectRatioProp="{width: 16,height: 9}" 
            :maxAspectRatioProp="{width: 16,height: 9}" 
            @croppedImageData = "setCroppedImageData"
            @showModal="showModal = false"
        />


        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Title"
                    placeholder = "Awesome Concert"
                    v-model:input="title"
                    inputType="text"
                    :error="errors.title ? errors.title[0] : ''"

                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Location"
                    placeholder = "Madrid"
                    v-model:input="location"
                    inputType="text"
                    :error="errors.location ? errors.location[0] : ''"

                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton
                    label="Post Image"
                    btnText="Update Post Image"
                    @showModal="showModal = true"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image="image"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full  px-3">
                <TextAreaView
                    label="Description"
                    placeholder="Please enter some information here!!!"
                    v-model:description="description"
                    :error="errors.description ? errors.description[0] : ''"

                />
            </div>
        </div>
        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full  px-3">
                <SubmitEvent
                    btnText="Update Post"
                    @submit="updatePost"
                />
            </div>
        </div>
    </div>

</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import TextInput from '../../components/global/TextInput.vue'
    import TextAreaView from  '../../components/global/TextAreaView.vue'
    import DisplayCropperButton from '@/components/global/DisplayCropperButton.vue';
    import SubmitEvent from '../../components/global/SubmitFormButton.vue'
    import CropperModal from '@/components/global/CropperModal.vue';
    import CroppedImage from '@/components/global/CroppedImage.vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import { usePostStore } from '@/store/post-store';
    import { useUserStore } from '@/store/user-store';
    import Swal from 'sweetalert2';
    import { useRouter } from 'vue-router';

    onMounted(async() => {
        await getPostById();
    })


    const router = useRouter();
    const userStore = useUserStore();
    const postStore = usePostStore();
    const route =  useRoute();
    let showModal = ref(false);
    let title = ref(null);
    let location = ref(null);
    let description = ref(null);
    let imageData = null;
    let image = ref(null);
    let errors = ref([]);


    const setCroppedImageData = (data) => {
        imageData = data;
        image.value = data.imageUrl;
    }

    const getPostById = async () => {

        try{
            let res = await axios.get('api/posts/' + route.params.id);

            title.value = res.data.title
            location.value = res.data.location
            description.value = res.data.description
            image.value = postStore.postImage(res.data.image);

        }catch(err) {
            errors.value = err.response.data.errors
        }

        
    }



    const updatePost = async () => {

        errors.value = []

        let data = new FormData();

        data.append('title', title.value || '')
        data.append('location', location.value || '')
        data.append('description', description.value || '')

        if (imageData) {
            data.append('user_id', userStore.id || '')
            data.append('image', imageData.file || '')
            data.append('height', imageData.height || '')
            data.append('width', imageData.width || '')
            data.append('left', imageData.left || '')
            data.append('top', imageData.top || '')
        }

        try {
            await axios.post('api/posts/' + route.params.id + '/?_method=PUT', data)

            Swal.fire(
                'Updated post!',
                'The post you update was called "' + title.value + '"',
                'success'
            )

            await postStore.fetchPostsByUserId(userStore.id)

            router.push('/account/profile/' + userStore.id)
        } catch (err) {
            errors.value = err.response.data.errors;
        }
    }


    


</script>
