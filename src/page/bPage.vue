<template>
    <div class="main">
        <ul class="list">
            <router-link tag="li" v-for="(item, index) in list" :to="{ path: `/b/${index}`}" :key="index">detail_b_{{index}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'b_page',
    data() {
        return {
            list: 4
        }
    },
    methods: {

    }
}
</script>
