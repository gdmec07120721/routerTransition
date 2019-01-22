<template>
    <div class="main">
        <ul class="list">
            <router-link tag="li" v-for="(item, index) in list" :to="{ path: `/a/${index}`}" :key="index">detail_a_{{index}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'a_page',
    data() {
        return {
            list: 4
        }
    },
    methods: {

    }
}
</script>
