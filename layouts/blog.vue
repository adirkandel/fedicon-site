<template>
    <div class="container font-sans text-black">
        <div class="flex justify-between items-center">
            <h1>
                <nuxt-link to="/">
                    My blog
                </nuxt-link>
            </h1>
            <div class="flex">
                <div>
                    <nuxt-link to="/about">About</nuxt-link>
                    <nuxt-link to="/team">Team</nuxt-link>
                </div>
            </div>
        </div>
        <Nuxt class="markdown-body" />
    </div>
</template>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css');

    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>
