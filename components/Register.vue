<template>
      <div class="containter mt-20">
        <h3 class="text-center text-2xl mb-5 flex justify-center tracking-widest">Register Here! </h3>
        <!------ error message here --------->
        <Notification :message="message" />
        <div class="grid grid-cols-8 gap-4">
            <form class="form-group col-start-4 col-span-4" @submit.prevent="handleRegister">
                <input class="p-4 border-2 bg-purple-100 mb-3 rounded border-blue-200" type="text" name="name" v-model="user.name" placeholder="Name" required><br />
                <input class="p-4 border-2 bg-purple-100 mb-3 rounded border-blue-200" type="text" name="username" v-model="user.username" placeholder="Username" required><br />
                <input class="p-4 border-2 bg-purple-100 mb-3 rounded border-blue-200" type="email" name="email" v-model="user.email" placeholder="Email" required><br />
                <input class="p-4 border-2 bg-purple-100 rounded border-blue-200" type="password" name="password" v-model="user.password" placeholder="Password" required><br />
                <input class="bg-purple-100 mt-5 px-10 py-2 p-4 hover:bg-blue-400 cursor-pointer rounded-full border-blue-200" value="Register" type="submit" />
            </form>
        </div>

         <p class="text-center tracking-widest py-2">Already have an account? <nuxt-link to="/login" class="text-blue-600">Login</nuxt-link></p>
    </div>
</template>

<script>
import User from '../models/user';
import Notification from './Notification.vue';
export default {
    data() {
        return {
            user: new User('', '', '', ''),
            message: ''
        }
    },
    methods: {
        handleRegister() {
            this.message = '';
            this.$store.dispatch('auth/register', this.user)
            .then( data => {
                this.message = data.message;
                this.$router.push('/dashboard')
                
            },
            error =>{
                this.message = (error.response && error.response.data) || error.message || error.toString();
                this.user.name = '';
                this.user.username = '';
                this.user.email = '';
                this.user.password = '';
        

            }
            )
        }
    }
    
}
</script>

<style>

</style>