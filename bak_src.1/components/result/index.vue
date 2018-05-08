<template>
  <div :class="'result result-' + type">
    <div class="brand-icon">
      <slot name="icon">
        <div :class="'icon icon-' + type + '-fill'"></div>
      </slot>
    </div>

    <h1><slot name="title">成功!</slot></h1>
    <div class="text">
      <slot name="text">
        <p>Some more message</p>
      </slot>
    </div>


    <div class="buttons">
      <slot name="buttons">
        <a class="button">OK</a>
        <a class="button button-light">返回</a>
      </slot>
    </div>

    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'  // success, error, forbidden
    }
  }
}
</script>

<style lang="less">
// not scoped to make style apply on slot elements
@import './result.less';
</style>
