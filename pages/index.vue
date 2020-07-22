<template>
    <div class="mt-16 px-6">
        <div class="flex flex-col items-center mb-10">
            <h1 class="text-6xl">Fedicon</h1>
            <h2 class="text-md">The first Front end lexicon made by the community ✌️</h2>
        </div>

        <div class="search flex justify-center">
            <div class="flex items-center h-12 w-full sm:w-1/2 lg:w-1/3 rounded shadow-md p-3">
                <label class="sr-only" for="search-bar">Search</label>
                <i class="la la-search text-md mr-2 text-gray-600"></i>
                <input id="search-bar" placeholder="Search" type="text" class="w-full outline-none">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>


<style>
</style>
