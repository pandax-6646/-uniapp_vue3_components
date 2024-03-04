<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import moment from 'moment'

interface Day {
  day: string
  week: string
  left?: number
  width?: number
}

let scrollLeft = 0
let dayList: Day[] = ref([])
const selectIndex = ref(0)

const contentScrollW = ref(0)
// 获取标题区域宽度，和每个子元素节点的宽度以及元素距离左边栏的距离
function getScrollW() {
  console.log('测试数据a')
  const query = uni.createSelectorQuery()

  query
    .select('.scroll-x')
    .boundingClientRect((data) => {
      console.log('data', data)
      // 拿到 scroll-view 组件宽度
      contentScrollW.value = data.width
    })
    .exec()

  query
    .selectAll('.day')
    .boundingClientRect((data) => {
      const dataLen: number = data?.length

      console.log(data, 's')
      for (let i = 0; i < dataLen; i++) {
        //  scroll-view 子元素组件距离左边栏的距离
        dayList[i].left = data[i].left
        //  scroll-view 子元素组件宽度
        dayList[i].width = data[i].width
      }
    })
    .exec()
}

function getMonthDays(month: number, dayList: Day[]): Day[] {
  const currMonth = moment().month()
  if (month - currMonth > 2) return dayList

  const currYear = moment().year()
  const dayNumber = moment(`${currYear}-${month + 1}`, 'YYYY-MM').daysInMonth()

  for (let i = month === currMonth ? moment().date() : 1; i <= dayNumber; i++) {
    const timeData = moment(`${currYear}-${month + 1}-${i}`, 'YYYY-MM-DD')
    dayList.push({
      day: timeData.format('MM-DD'),
      week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][
        timeData.weekday()
      ]
    })
  }
  return getMonthDays(month + 1, dayList)
}

function changeDay(row, index: number) {
  selectIndex.value = index

  // 效果一(当前点击子元素靠左展示)  子元素宽度不相同也可实现
  scrollLeft = 0
  for (let i = 0; i < index - 1; i++) {
    scrollLeft += dayList?.i?.width
  }
}

onMounted(() => {
  getScrollW()
  changeDay({}, 50)
})

onLoad(() => {
  moment.locale('zh-cn')
  dayList = getMonthDays(moment().month(), [])
})
</script>

<template>
  <scroll-view
    :scroll-x="true"
    class="scroll-x"
    :scroll-left="scrollLeft"
    scroll-with-animation
  >
    <view class="calendar-day">
      <view
        v-for="(item, index) in dayList"
        :key="index"
        class="day"
        :style="{
          color: Number(selectIndex) === index ? '#72866b' : '',
          'font-weight': Number(selectIndex) === index ? 'bold' : ''
        }"
        @click.stop="changeDay(item, index)"
      >
        <view class="weeks">{{ item.week }}</view>
        <view class="days">{{ item.day }}</view>
      </view>
    </view>
  </scroll-view>
</template>

<style scoped lang="scss">
.scroll-x {
  width: 620rpx;
}
.calendar-day {
  display: flex;
  height: 120rpx;
  .day {
    min-width: 120rpx;
    text-align: center;
    font-size: 28rpx;
    color: #333;
  }
}
</style>
