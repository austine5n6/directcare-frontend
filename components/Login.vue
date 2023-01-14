<template>
  <div class="containter rounded-lg mt-20 shadow-2xl p-10 mx-auto w-2/4">
    <h3 class="text-4xl text-center mb-5">Login Here!</h3>
    <!------ error message here --------->
    <Notification :message="message" />
    <div class="px-10">
      <form
        class="form-group col-start-4 col-span-4"
        @submit.prevent="handleLogin"
      >
        <input
          class="
            p-4
            border-2
            w-full
            bg-purple-100
            mb-4
            rounded-full
            border-blue-200
          "
          type="text"
          name="username"
          v-model="user.username"
          placeholder="Username"
          required
        /><br />
        <input
          class="p-4 border-2 bg-purple-100 rounded-full w-full border-blue-200"
          type="password"
          name="password"
          v-model="user.password"
          placeholder="Password"
          required
        /><br />
        <input
          class="
            bg-purple-100
            mt-5
            px-10
            py-2
            p-4
            hover:bg-blue-400
            cursor-pointer
            rounded-full
            border-blue-200
            flex
            justify-end
          "
          value="Login"
          type="submit"
        />
      </form>
    </div>

    <p class="text-center tracking-wider py-2">
      Dont have an account,
      <nuxt-link to="/register" class="text-blue-600">Signup</nuxt-link>
    </p>
  </div>
</template>

<script>
import User from "../models/user";
import Notification from "./Notification.vue";
export default {
  data() {
    return {
      user: new User("", ""),
      // loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },

  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/dashboard");
          },
          (error) => {
            this.message =
              (error.response && error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>

<style></style>
