export function useTheme() {
  onReady(() => {
    const { navBar, tabBar } = useStore('theme')

    // 设置导航栏颜色
    uni.setNavigationBarColor(navBar.value)

    // 设置tabbar
    uni.setTabBarStyle(tabBar.value)
  })

  return useStore('theme').main
}
