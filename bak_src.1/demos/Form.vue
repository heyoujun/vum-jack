<template>
  <div class="page">
    <simple-header title="个人资料" :back-link="true"></simple-header>
    <page-content>
      <form-list>
        <div slot="title">项目列表</div>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">姓名</div>
            <div class="item-input">
              <input type="text" placeholder="此处填写姓名">
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">E-mail</div>
            <div class="item-input">
              <input type="email" placeholder="此处填写 E-mail">
            </div>
            <div class="item-after">
              <m-button>验证</m-button>
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-password.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input type="password" placeholder="填写密码" class="">
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-gender.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">性别</div>
            <div class="item-input">
              <select>
                <option>男</option>
                <option>女</option>
              </select>
            </div>
          </div>
          <!-- Date -->
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-calendar.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">生日</div>
            <div class="item-input">
              <input type="date" placeholder="Birth day" value="2018-04-28">
            </div>
          </div>
          <!-- Switch (Checkbox) -->
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-toggle.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">消息提醒</div>
            <div class="item-input">
              <switcher></switcher>
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-comment.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">消息记录</div>
            <div class="item-input">
              <textarea></textarea>
            </div>
          </div>
        </form-item>
        <div slot="append">米筑提供技术支持.</div>
      </form-list>
      <div class="content-block content-padded">
        <div class="row">
          <div class="col-50"><m-button type="danger" size="large">取消</m-button></div>
          <div class="col-50"><m-button size="large">提交</m-button></div>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import { Form, FormItem } from '../components/form'
import Switcher from '../components/switcher'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    'm-button': Button,
    Switcher,
    'form-list': Form,
    FormItem
  }
}
</script>
