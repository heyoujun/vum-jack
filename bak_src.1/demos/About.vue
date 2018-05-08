<template>
  <div class="my-page">
    <simple-header title="我的"></simple-header>
    <page-content>
      <div class="content-padded">
        <p>米筑提示</p>
        <p>欢迎: <a href="http://www.mizhuw.com" target="_blank">先生，欢迎来到米筑平台，祝您新房装修愉快!</a></p>
        <p>互联网整体家装</p>
        <p>
          @2018/04/28 by 贺右军
        </p>
      </div>
    </page-content>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'

export default {
  components: {
    SimpleHeader,
    'page-content': Content
  }
}
</script>
