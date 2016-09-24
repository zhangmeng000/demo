import React, { PropTypes } from 'react'
import echarts from 'echarts'

class Echarts extends React.Component {
  componentDidMount(){
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        color:['blue'],
        textStyle: {
        color: 'red'
        },
        itemStyle: {
            normal: {
                shadowBlur: 200,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 25, 10, 20]
        }]
    });
  }
  render () {
    return(
      <div id='main' style ={{width:'500px',height:'400px'}}></div>
    )
  }
}

export default Echarts;
