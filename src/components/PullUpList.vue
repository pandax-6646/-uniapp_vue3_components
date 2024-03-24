<script setup lang="ts">
withDefaults(
  defineProps<{
    loadStatus: 'more' | 'loading' | 'noMore'
    lowerThreshold: number
    onScrollToLower: () => void
  }>(),
  {
    loadStatus: 'more',
    lowerThreshold: 1,
    onScrollToLower: () => {}
  }
)

interface ContentText {
  contentdown: string
  contentrefresh: string
  contentnomore: string
}

const contentText = ref<ContentText>({
  contentdown: '上拉显示更多',
  contentrefresh: '正在加载...',
  contentnomore: '没有更多数据了'
})
</script>

<template>
  <scroll-view
    :style="{
      height: '100%',
      width: '100%'
    }"
    refresher-enabled
    :scroll-y="true"
    :lower-threshold="lowerThreshold"
    @scrolltolower="onScrollToLower"
  >
    <slot name="list" />
    <uni-load-more :status="loadStatus" :content-text="contentText" />
  </scroll-view>
</template>
