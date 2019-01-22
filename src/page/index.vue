<style>
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all .6s;
}
.left-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.left-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.right-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
<template>
    <div class="wrap">
        <nav class="nav">
            <span class="nav_left" @click="back">〈</span>
            <p class="nav_title">{{$route.meta.title}}</p>
            <router-link :to="{ path: '/login'}" class="nav_right">登录</router-link>
        </nav>
        <div class="main_wrap">
            <transition :name="`${$store.state.router.direction}`">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <footer class="footer">
            <router-link :to="{ path: '/a'}">A页面</router-link>
            <router-link :to="{ path: '/b'}">B页面</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>
