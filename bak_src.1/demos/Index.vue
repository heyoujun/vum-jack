<template>
  <div class="page">
    <page-footer>
      <footer-item v-bind:class="{ 'active' : currentView === 'home' }" @click.native="changeView('home')">
        <span class="icon demo-icon-home"></span>
        <label>首页</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'search' }" @click.native="changeView('search')">
        <span class="icon demo-icon-search"></span>
        <label>查找</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'noti' }" @click.native="changeView('noti')">
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <label>最新</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'about' }" @click.native="changeView('about')">
        <span class="icon demo-icon-me"></span>
        <label>我的</label>
      </footer-item>
    </page-footer>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import Page from '../components/page'
import { Footer, Item, FooterItem } from '../components/footer'
import Home from './Home'
import Search from './Search'
import Noti from './Noti'
import About from './About'

console.log(FooterItem)
export default {
  components: {
    Page,
    'page-footer': Footer,
    'footer-item': Item,
    'home': Home,
    'search': Search,
    'noti': Noti,
    'about': About
  },
  data () {
    return {
      currentView: 'home'
    }
  },
  methods: {
    changeView (view) {
      this.currentView = view
    }
  }
}
</script>

<style lang="less">
.my-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 2.8rem;
}
.demo-icon-home {
  background-image: url("../assets/images/home/home.png");
  background-size: 100%;
}
.demo-icon-search {
  background-image: url("../assets/images/home/search.png");
  background-size: 100%;
}
.demo-icon-noti {
  background-image: url("../assets/images/home/button.png");
  background-size: 100%;
}
.demo-icon-me {
  background-image: url("../assets/images/home/person.png");
  background-size: 100%;
}
</style>
