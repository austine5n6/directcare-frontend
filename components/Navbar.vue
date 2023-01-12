<template>
    <header class="flex bg-blue-300 py-3 px-4 text-2xl justify-between items-center">
       <nuxt-link to="/" class="text-lg text-white tracking-wide font-semibold ">e-COM Laptops</nuxt-link> 
             <ul class="flex mr-8">
                 <nuxt-link to="/profile" class="text-white text-xl leading-tight cursor-pointer py-2 hover:text-gray-600 mr-5" v-if="loggedIn">{{ currentUser.name}}</nuxt-link>
                 <a class=" text-xl py-2 text-white cursor-pointer hover:text-gray-600 leading-tight" @click="logout" v-if="loggedIn">Logout</a>
                    <nuxt-link to="/login" class="text-gray-500 font-semibold bg-green-200 mr-4 border auto-mx rounded-lg px-2 py-1 hover:bg-blue-300 hover:text-white tracking-wider text-xl" v-if="!loggedIn">Login</nuxt-link>
                 <nuxt-link to="/about" class="text-gray-500 font-semibold bg-green-200 border auto-mx rounded-lg px-2 py-1 hover:bg-blue-300 hover:text-white tracking-wider text-xl" v-if="!loggedIn">About</nuxt-link>
             </ul>
        </header>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        return this.loggedIn;
    }

}
</script>

<style>

</style>