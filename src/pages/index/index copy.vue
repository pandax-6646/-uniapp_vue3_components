<script setup lang="ts">
import { useTitle } from '@/hooks/useTitle'
import { forward } from '@/utils/router'

const { title, changeTitle } = useTitle()
function goTest() {
  forward('test', {
    a: 1
  })
}

const hanldeLogin = async () => {}

const { style, schoolName, projectDesc, updateTheme } = useStore('theme')
</script>

<template>
  <view class="content">
    <DayList></DayList>
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
