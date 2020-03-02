import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import IconFont from '../../components/iconfont';
import common from '../../common/js/common';
import './timeTable.scss';
function TimeTable(props) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let [_arr, _rise, sun] = [[], [], []];
    if (props.newWeather.forecast_1h) {
      for (const x in props.newWeather.forecast_1h) {
        if (x < 24) {
          _arr.push(props.newWeather.forecast_1h[x]);
        }
      }
      _rise.push(props.newWeather.rise[0], props.newWeather.rise[1]);
      // // 日出日落时间初始化
      // _rise.map((r) => {
      //   r.maxTime = moment(r.time + 'T' + r.sunrise.replace(/[^0-9.]/g, '')).format('YYYY-MM-DD HH:mm');
      //   r.minTime = moment(r.time + 'T' + r.sunset.replace(/[^0-9.]/g, '')).format('YYYY-MM-DD HH:mm');
      // });
      // _arr.map((r, i) => {
      //   r.time = moment(r.update_time.substr(0, 8) + 'T' + r.update_time.substr(8, 6)).format('YYYY-MM-DD HH:mm');
      //   // 把日出日落时间组合，确定插入位置
      //   if (moment(r.time).isBefore(_rise[0].maxTime)) {
      //     sun[0] = { time: _rise[0].maxTime, i: i, name: '日出', type: 1 };
      //   } else if (moment(r.time).isBefore(_rise[0].minTime)) {
      //     sun[1] = { time: _rise[0].minTime, i: i, name: '日落', type: 2 };
      //   } else if (moment(r.time).isBefore(_rise[1].maxTime)) {
      //     sun[2] = { time: _rise[1].maxTime, i: i, name: '日出', type: 1 };
      //   } else if (moment(r.time).isBefore(_rise[1].maxTime)) {
      //     sun[3] = { time: _rise[1].minTime, i: i, name: '日落', type: 2 };
      //   }
      // });
      // let count = 1;
      // sun
      //   .filter((r) => r)
      //   .map((r) => {
      //     _arr.splice(r.i + count, 0, { time: r.time, weather_code: r.type === 1 ? '999' : '888', degree: r.name });
      //     count++;
      //   });
      setArr(_arr);
    }
  }, [props.newWeather.forecast_1h]);
  return (
    <ScrollView className="scroll" scrollX="true" scrollAnchoring="true">
      {arr &&
        arr.map((r, i) => {
          return (
            <View className="list">
              {/* <View>{moment(r.time).format('HH:mm')}</View> */}
              <View>
                <IconFont name={common.getIconStr(r.weather_code).iconNmae} size="50" />
              </View>
              <View className="weather">{r.degree + (r.type ? '' : '°')}</View>
            </View>
          );
        })}
    </ScrollView>
  );
}
export default TimeTable;
