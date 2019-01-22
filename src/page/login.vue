<template>
    <div class="main">
        <router-link class="btn btn_primary" :to="{ path: '/a'}" replace>登录成功</router-link>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            list: 4
        }
    },
    methods: {

    }
}
</script>
