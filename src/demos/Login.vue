<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<template>
  <!-- 主体 -->
  <div class="box">
    
    <!-- 头部 -->
    <div class="header">
      <img class="img-logo" src="../assets/huati/logo.png">
      <div class="biaoyu">互联网一站式整装平台</div>



    </div>
    <!-- 导航 -->
    <div class="menu"></div>
    <!-- 内容 -->
    <div class="content"></div>
    <!-- 底部 -->
    <div class="bottom"></div>
  </div>

</template>

<script>
import { Header, HeaderLink, HeaderTitle, SecondHeader } from '../components/header'
import Content from '../components/content'
import { Footer, SecondFooter, FooterItem } from '../components/footer'
import Icon from '../components/icons'
import { Button } from '../components/buttons'
import Searchbar from '../components/searchbar'

export default {
  components: {
    'page-header': Header,
    SecondHeader,
    HeaderLink,
    HeaderTitle,
    'page-content': Content,
    'page-footer': Footer,
    SecondFooter,
    FooterItem,
    'btn': Button,
    Icon,
    Searchbar
  }
}
</script>

<style lang="less">
*{margin: 0;padding: 0}
//  <!-- 主体 -->
.box{width: 100%;}
// <!-- 头部 -->
.header{
   position: absolute;
   max-width: 100%;
   background-image: url("../assets/huati/logonbg.gif"); 
   margin: auto;
 }
 img { max-width: 100%;}
  .img-logo{
   position:relative;
   top:14%;
   left:34.9%;
 }
   .biaoyu{
   position:relative;
   top:15%;
   left:31.9%;
   color: white;
   font-size: 1rem;
   font-family: cursive,'Courier New', Courier, monospace;
   font-style: agreeMent;
 }
// <!-- 导航 -->
.menu{}
// <!-- 内容 -->
.content{}
// <!-- 底部 -->
.bottom{}
</style>