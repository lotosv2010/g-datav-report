<template>
  <div class="map-view">
    <div class="map-wrapper">
      <el-card shadow="hover" :body-style="{ padding: '0' }">
        <v-chart class="v-chart" :option="option" />
      </el-card>
    </div>
    <div class="chart-wrapper">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import mapStyle from "./mapStyle.json";
import data from "./data.json";
import geoCoordMap from "./geoCoordMap.json";
import LiquidFill from "../LiquidFill";
import WordCloud from "../WordCloud";

const convertData = function (data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

export default {
  name: "MapView",
  components: {
    LiquidFill,
    WordCloud,
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.option = {
      title: {
        text: "外卖销售数据大盘",
        subtext: "销售趋势统计",
        sublink: "https://lbsyun.baidu.com/solutions/mapvdata",
        left: "center",
      },
      bmap: {
        key: "kR86n1C2cFmpSlyihEmh6n88cNTtGbeQ",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle,
      },
      series: [
        {
          name: "pm2.5",
          type: "scatter",
          coordinateSystem: "bmap",
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          encode: {
            value: 2,
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          itemStyle: {
            color: "purple",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        {
          name: "Top 5",
          type: "effectScatter",
          coordinateSystem: "bmap",
          data: convertData(
            data
              .sort(function (a, b) {
                return b.value - a.value;
              })
              .slice(0, 6)
          ),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          encode: {
            value: 2,
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          label: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          itemStyle: {
            color: "purple",
            shadowBlur: 10,
            shadowColor: "#333",
          },
          zlevel: 1,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map-view {
  margin-top: 20px;
  display: flex;
  .map-wrapper {
    box-sizing: border-box;
    width: 80%;
    float: 0 0 80%;
    padding-right: 10px;
    .el-card {
      .v-chart {
        height: 600px;
        position: relative;
      }
    }
  }
  .chart-wrapper {
    box-sizing: border-box;
    flex: 1;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .el-card {
      .title {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
      }
      .chart {
        width: 100%;
        height: 190px;
      }
    }
  }
}
</style>
