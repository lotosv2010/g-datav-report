<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu default-active="1" mode="horizontal">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              v-model="date"
              size="small"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-charts-wrapper">
          <div id="sales-chart" class="v-charts"></div>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import echarts from "@/plugins/echarts.js";
export default {
  name: "SalesView",
  data() {
    return {
      radioSelect: "今日",
      date: "",
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 6,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 7,
          name: "麦当劳",
          money: "323,234",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
        color: ["#3398DB"],
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        tooltip: {},
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        grid: {
          top: 70,
          right: 60,
          left: 60,
          bottom: 20,
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data: [140, 232, 101, 64, 290, 140, 50, 99, 67, 190, 300, 200],
          },
        ],
      };
      const dom = document.getElementById("sales-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el-date-editor {
        margin-left: 20px;
      }
    }
  }
  .sales-view-charts-wrapper {
    display: flex;
    height: 270px;
    .v-charts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background-color: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
