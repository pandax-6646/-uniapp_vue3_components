export default {
  light: {
    navBar: {
      backgroundColor: 'red',
      // 仅支持 #ffffff 和 #000000
      frontColor: '#000000'
    },

    tabBar: {
      backgroundColor: '#FFF',
      color: '#333',
      selectedColor: '#0BB640',
      borderStyle: 'white'
    },

    main: {
      '--primary-color': '#4285f4',
      '--success-color': '#4cd964',
      '--warning-color': '#ffa54e',
      '--error-color': 'yellow'
    }
  },

  dark: {
    navBar: {
      backgroundColor: '#333',
      frontColor: '#ffffff'
    },

    tabBar: {
      backgroundColor: '#333',
      color: '#fff',
      selectedColor: '#0BB640',
      // tabBar上边框的颜色， 仅支持 black/white
      borderStyle: 'black'
    },

    main: {
      '--primary-color': '#4285f4',
      '--success-color': '#4cd964',
      '--warning-color': '#ffa54e',
      '--error-color': 'red'
    }
  }
}
