<script setup lang="ts">
import user from '@/api/user'
import { useTitle } from '@/hooks/useTitle'
import { forward } from '@/utils/router'

const { title, changeTitle } = useTitle()
function goTest() {
  forward('test', {
    a: 1
  })
}

const hanldeLogin = async () => {
  const res = await user.login({
    username: 'admin',
    password:
      '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    code: 9527,
    codeKey: 'image_code_557a2f16c14843cf98b46d0cf7414268',
    type: 2
  })

  console.log('返回数据', res)
}

const { style, schoolName, projectDesc, updateTheme } = useStore('theme')
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view @click="changeTitle">changeTitle</view>
    <view @click="goTest">测试页</view>

    <uni-card>
      <text>
        这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
      </text>
    </uni-card>
    <button
      size="default"
      type="default"
      hover-class="is-hover"
      style="margin-top: 20rpx"
      class="test"
      @click="hanldeLogin"
    >
      测试接口
    </button>
    <button
      :style="{ color: style['--error-color'] }"
      @click="updateTheme('zd')"
    >
      {{ schoolName }} {{ projectDesc }}
    </button>
  </view>
</template>

<style scoped lang="scss">
.test {
  color: $uni-color-primary;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 200rpx;
  margin-bottom: 50rpx;
  width: 200rpx;
  height: 200rpx;
}
.text-area {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
