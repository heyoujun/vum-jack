<template>
  <div class="my-page">
    <simple-header title="注意"></simple-header>
    <page-content>
      <div class="content-padded">
        <p>无内容</p>
        <p></p>
      </div>
    </page-content>
  </div>

</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    'page-content': Content
  }
}
</script>
