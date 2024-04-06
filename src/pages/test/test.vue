<script lang="ts" setup>
// import { getCommonParams, setCommonParams } from '@/config/commonParams'
import { useInit } from '@/hooks/useInit'
import { useTitle } from '@/hooks/useTitle'
import { onUrlPage } from '@/utils/router'
import uniAsync from '@/utils/uniAsync'

onLoad(() => {
  const { pageName, pagePath, pageQuery } = useInit()
  console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery')
})

const { title, changeTitle } = useTitle()

const { name, fullName, updateName } = useStore('test')

function getCommonParam() {
  // console.log(getCommonParams())
}
function setCommonParam() {
  // setCommonParams({ channel: 'test' })
  getCommonParam()
}

async function uniAsyncTest() {
  const systemInfo = await uniAsync.getSystemInfo()
  console.log(systemInfo, 'systemInfo')
}

function onScrollToLower() {
  console.log('自定义 onScrollToLower')
}

function onScroll() {
  console.log('自定义 onScroll')
}
</script>

<template>
  <div class="h-screen">
    <PullList :on-scroll-to-lower="onScrollToLower" :on-scroll="onScroll">
      <template #list>
        <view>name:{{ name }}</view>
        <view>fullName:{{ fullName }}</view>
        <view @click="updateName('newName')">updateName</view>
        <view>title:{{ title }}</view>
        <view @click="changeTitle">changeTitle</view>
        <view @click="getCommonParam">getCommonParams</view>
        <view @click="setCommonParam">setCommonParams</view>
        <view @click="uniAsyncTest">uniAsyncTest</view>
        <view data-url="index?a=1" @click="onUrlPage">onUrlPage</view>
        <view class="p-10">unocss-test</view>
        <view v-for="i in 30" :key="i" class="p10">scroll Test</view>
      </template>
    </PullList>
  </div>
</template>

<style lang="scss" scoped></style>
