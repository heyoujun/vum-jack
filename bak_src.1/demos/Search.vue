<template>
  <div class="my-page">
    <simple-header title="查找"></simple-header>
    <page-content>
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
