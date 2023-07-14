<template>
    <div class="w-full bg-gray-200 text-gray-500">
        <div class="
            container
            mx-auto
            max-w-4xl
            h-full
            flex
            flex-wrap
            justify-between
            items-start
            text-sm
            p-6
            pb-4
            pt-8
        "
        >
            <div>
                <div class="mb-2 text-lg underline">
                    <b>Quick Links</b>
                </div>
                <router-link  to="/" class="block mb-2">Home</router-link>
                <router-link  to="/login" class="block mb-2">Login</router-link>
                <router-link  to="/register" class="block mb-2">Register</router-link>
            </div>
            <div class="mb-2 text-lg underline">
                <div class="mb-4">
                    Our Community
                </div>
                <p class="mb-4 leading-normal">
                    123 Main Street <br>
                    London <br>
                    SW1 SW1 
                </p>
                <p class="text-sm">07775 234 456</p>
            </div>        
        </div>
        <div class="
            container
            mx-auto
            max-w-4xl
            h-full
            flex
            flex-wrap
            md:justify-between
            justify-evenly
            items-center
            text-sm
            py-6
            pl-6
            pr-4
        "
        >
            <div class="mt-4">&copy;2023 PMN Community, All rights reserved.</div>
            <div class="pt-4 md:p-0 text-left  text-xs">
                <div class="no-underline hover:underline ml-4">Privacy Policy</div>
                <div class="no-underline hover:underline ml-4">Terms & Conditions</div>
                <div class="no-underline hover:underline ml-4">Contact Us</div>

            </div>
        </div>
    </div>
</template>

<script setup>
</script>
