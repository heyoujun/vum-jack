<template>
  <div class="my-page">
    <page-header>
      <header-link>贺右军</header-link>
      <header-title>米筑</header-title>
    </page-header>
    <page-content>
      <header class='demos-header'>
        <h3 class="demos-title">个人中心</h3>
      </header>
      <div class="grids grids-small">
        <router-link :to="{ path: 'page' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/page.png" alt="">
          </div>
          <p class="grid_label">
            全部
          </p>
        </router-link>
        <router-link :to="{ path: '/form' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            个人资料
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/column.png" alt="">
          </div>
          <p class="grid_label">
            我的材料
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/grid.png" alt="">
          </div>
          <p class="grid_label">
            订单列表
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/list.png" alt="">
          </div>
          <p class="grid_label">
            待办事项
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/contacts.png" alt="">
          </div>
          <p class="grid_label">
            项目联系人
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/form.png" alt="">
          </div>
          <p class="grid_label">
            装修日记
          </p>
        </router-link>
        <router-link :to="{ name: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/toast.png" alt="">
          </div>
          <p class="grid_label">
            装修进度
          </p>
        </router-link>
        <router-link :to="{ name: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/result.png" alt="">
          </div>
          <p class="grid_label">
            已完工
          </p>
        </router-link>
        <router-link :to="{ name: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/star.png" alt="">
          </div>
          <p class="grid_label">
            备忘
          </p>
        </router-link>
      </div>

      <h2 class="demos-title">项目沟通</h2>
      <div class="grids grids-small">
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/modal.png" alt="">
          </div>
          <p class="grid_label">
            全部话题
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/preloader.png" alt="">
          </div>
          <p class="grid_label">
            已结束话题
          </p>
        </router-link>
        <router-link :to="{ name: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/toast.png" alt="">
          </div>
          <p class="grid_label">
            进行中
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/tab.png" alt="">
          </div>
          <p class="grid_label">
            建议列表
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/scroll.png" alt="">
          </div>
          <p class="grid_label">
            反馈意见
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/window.png" alt="">
          </div>
          <p class="grid_label">
            提示信息
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/window.png" alt="">
          </div>
          <p class="grid_label">
            工地照片
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/menu.png" alt="">
          </div>
          <p class="grid_label">
            备忘
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/search.png" alt="">
          </div>
          <p class="grid_label">
            查找
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/calendar.png" alt="">
          </div>
          <p class="grid_label">
            进度相关
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/slide.png" alt="">
          </div>
          <p class="grid_label">
            随便说说
          </p>
        </router-link>
        <router-link :to="{ path: 'side-' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/side.png" alt="">
          </div>
          <p class="grid_label">
            A组讨论
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/menu.png" alt="">
          </div>
          <p class="grid_label">
            B组讨论
          </p>
        </router-link>
        <router-link :to="{ path: '' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/circle.png" alt="">
          </div>
          <p class="grid_label">
            其他事项
          </p>
        </router-link>
      </div>
    </page-content>
  </div>
</template>
<script>
import Grid from '../components/grid'
import { Header, HeaderLink, HeaderTitle } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    'page-header': Header,
    HeaderLink,
    HeaderTitle,
    'page-content': Content,
    Grid
  }
}
</script>
