<template>
  <div class="bg-blue-300 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style="font-family:'Lato',sans-serif;">
    <header class="max-w-lg mx-auto">
        <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Login </h1>
        </a>
    </header>

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-semibold text-xl text-gray-400 tracking-wider">Welcome to ecom-Laptops</h3>
            <p class="text-gray-600 pt-2 tracking-wide">Login in to your account.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST" action="#">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <!-- <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Username</label> -->
                    <input type="text" id="username" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-400 transition duration-500 px-3 py-2 pb-3" placeholder="Username">
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <!-- <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label> -->
                    <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-400 transition duration-500 px-3 pb-3" placeholder="Password">
                </div>
                <div class="flex justify-end">
                    <!-- <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a> -->
                </div>
                <button class="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login</button>
            </form>
        </section>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">Don't have an account? <a href="/register" class="font-bold hover:underline">Sign up</a>.</p>
    </div>

    <!-- <footer class="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" class="hover:underline">Contact</a>
        <span class="mx-3">•</span>
        <a href="#" class="hover:underline">Privacy</a>
    </footer> -->
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>