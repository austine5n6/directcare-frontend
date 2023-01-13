<template>
    <div class="text-center text-sm rounded-lg p-3 text-red-300">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    }
}
</script>

<style>

</style>