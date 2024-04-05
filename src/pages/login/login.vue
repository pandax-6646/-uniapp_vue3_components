<script setup lang="ts">
import { hideLoading } from '@/config/serviceLoading'
import { forward } from '@/utils/router'
import user from '@/api/user'

// 传统表单登录，测试账号：13123456789 密码：123456，测试账号仅开发学习使用。
const form = ref({
  account: '13123456789',
  password: '123456'
})

// 表单提交
const onSubmit = async () => {
  const res = await user.login({ ...form.value, isLoading: true })
  if (Number(res.code) === 1 && res.result) {
    const { setUserInfo } = useStore('user')
    setUserInfo(res.result)
    hideLoading()

    uni.showToast({ title: '登录成功', icon: 'success' })

    setTimeout(() => {
      forward('user', { type: 'tabBarPage' })
    }, 1000)
  }
}
</script>

<template>
  <view class="login-wrap">
    <view class="logo">
      <image
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png"
      />
    </view>
    <view class="login">
      <input
        v-model="form.account"
        class="input"
        type="text"
        placeholder="请输入用户名/手机号码"
      />
      <input
        v-model="form.password"
        class="input"
        type="text"
        password
        placeholder="请输入密码"
      />
      <button class="button phone" @tap="onSubmit">登录</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.login-wrap {
  display: flex;
  flex-direction: column;
  padding: 20rpx 40rpx;
  height: 100%;
}
.logo {
  flex: 1;
  text-align: center;
  image {
    margin-top: 10vh;
    width: 220rpx;
    height: 220rpx;
  }
}
.login {
  display: flex;
  flex-direction: column;
  padding: 40rpx 20rpx 20rpx;
  height: 60vh;
  .input {
    box-sizing: border-box;
    margin-bottom: 20rpx;
    padding-left: 30rpx;
    border: 1px solid #ddd;
    border-radius: 72rpx;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30rpx;
    border-radius: 72rpx;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    color: #fff;
    .icon {
      margin-right: 6rpx;
      font-size: 40rpx;
    }
  }
  .phone {
    background-color: #28bb9c;
  }
}
</style>
