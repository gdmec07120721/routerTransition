import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import storage from '@/utils/storage'

Vue.use(Router); 

import Index from '@/page/index'
import APage from '@/page/aPage'
import ADetail from '@/page/aDetail'
import BPage from '@/page/bPage'
import BDetail from '@/page/bDetail'
import Login from '@/page/login'

var before_time = 0, timer = null;

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        redirect: 'a',
        children: [
            {path: 'a', name: 'a_page', component: APage, meta: {title: 'A页面'}},
            {path: '/a/:id', name: 'a_detail', component: ADetail, meta: {title: 'A详情页'}},
            {path: 'b', name: 'b_page', component: BPage, meta: {title: 'B页面'}},
            {path: '/b/:id',name: 'b_detail',component: BDetail, meta: {title: 'B详情页'}},
            {path: 'login',name: 'login',component: Login, meta: {title: '登录页面'}}
        ]
    }]
});

//设置过渡的样式名
function setTransitionName(change_time = 600) {
    let new_url_key_index, old_url_key_index;
    let urls = storage.getSession('ROUTER_HISTORY');
    let new_url_key = history.state.key;
    let old_url_key = sessionStorage.getItem('OLDURLKEY');

    if (urls.length > 0) {
        new_url_key_index = urls.indexOf(new_url_key);
        old_url_key_index = urls.indexOf(old_url_key);

        
        if (new_url_key_index == -1 || new_url_key_index > old_url_key_index) {
            //前进
            return false;
        } else { //后退
            storage.setSession('ROUTER_HISTORY', urls.slice(0, new_url_key_index));
            store.commit('router/updateDirection', 'right');
            
            //防抖 
            clearTimeout(timer);
            timer = setTimeout(() => {
                store.commit('router/updateDirection', 'left');
            }, change_time);
        }
    }
}

try {
    //监控到浏览器历史发生变化
    //该事件只有在做出浏览器动作时，才会触发该事件
    //如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）
    window.onpopstate = e => {
      setTransitionName();
    }
} catch (e) {
    //监听hash变化
    window.onhashchange = e => {
     setTransitionName(500);
    }  
}

router.beforeEach((to, from, next) => {
    let key = history.state ? history.state.key : '0';
    let router_history = storage.getSession('ROUTER_HISTORY') || [];

    //记录路由历史，这里主要记录history.state.key的值
    router_history = [...new Set([...router_history, key.toString()])];
    storage.setSession('ROUTER_HISTORY', router_history);
    //记录当前路由的key，当已经进入页面之后，相对即将切换路由，其为旧的路由key
    storage.setSession('OLDURLKEY', key.toString());

    next();
});

export default router;