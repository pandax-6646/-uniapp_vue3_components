<script setup lang="ts" name="cart">
import { useTheme } from '@/hooks/useTheme'
const styleTheme = useTheme()

const { updateTheme } = useStore('theme')
</script>

<template>
  <view :style="styleTheme" class="cart" @tap="updateTheme">切换暗色主题</view>
</template>

<style scoped lang="scss">
.cart {
  margin: 50rpx auto;
  background-color: var(--primary-color);
  text-align: center;
  color: var(--error-color);
}
</style>
