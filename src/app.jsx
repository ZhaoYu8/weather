import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可
import './app.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ['pages/index/index', 'pages/select/select'],
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '轻天气',
      navigationBarTextStyle: 'black'
    },
    permission: {
      'scope.userLocation': {
        desc: '欢迎使用轻天气，我们需要你授权地理位置信息！'
      }
    },
    requiredBackgroundModes: ['audio']
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
