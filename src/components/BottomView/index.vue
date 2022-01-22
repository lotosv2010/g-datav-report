<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">关键词搜索</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <div id="search-user-chart" class="v-charts"></div>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <div id="search-num-chart" class="v-charts"></div>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
              </el-table>
              <el-pagination
                :total="total"
                :current-page="currentPage"
                :page-size="pageSize"
                @current-change="currentChange"
                layout="prev, pager, next"
                background
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div id="category-chart" class="category-chart"></div>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import echarts from "@/plugins/echarts.js";
export default {
  name: "BottomView",
  data() {
    return {
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 2,
          rank: 2,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 3,
          rank: 3,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 4,
          rank: 4,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
      ],
      total: 100,
      currentPage: 1,
      pageSize: 4,
      radioSelect: "品类",
    };
  },
  mounted() {
    this.initUserChart();
    this.initNumChart();
    this.initCategoryChart();
  },
  methods: {
    currentChange() {},
    initUserChart() {
      const option = {
        tooltip: {},
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false, // 与x轴两侧的间距
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
        series: [
          {
            type: "line",
            smooth: true,
            lineStyle: {
              color: "rgb(95, 187, 255)",
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: "rgb(95, 187, 255)",
            },
            data: [140, 232, 101, 64, 290, 140, 50, 99, 67, 190, 280, 200],
          },
        ],
      };
      const dom = document.getElementById("search-user-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
    initNumChart() {
      const option = {
        tooltip: {},
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false, // 与x轴两侧的间距
        },
        yAxis: {
          show: false,
          type: "value",
        },
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
        series: [
          {
            type: "line",
            smooth: true,
            lineStyle: {
              color: "rgb(95, 187, 255)",
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: "rgb(95, 187, 255)",
            },
            data: [140, 232, 101, 64, 290, 140, 50, 99, 67, 190, 120, 200],
          },
        ],
      };
      const dom = document.getElementById("search-num-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
    initCategoryChart() {
      const option = {
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
            left: 20,
            top: 20,
          },
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.5%",
            y: "42.5%",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: (params) => {
            const seriesName = params.seriesName;
            const marker = params.marker;
            const legendname = params.data.legendname;
            const value = params.data.value;
            const percent = params.data.percent;
            return `${seriesName}<br />${marker}${legendname}<br />数量：${value}<br />占比：${percent}`;
          },
        },
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
        legend: {
          top: "middle",
          left: "70%",
          type: "scroll",
          orient: "vertical",
          textStyle: {
            color: "#8c8c8c",
          },
        },
        series: [
          {
            name: "品类分布",
            type: "pie",
            radius: ["45%", "60%"],
            center: ["35%", "50%"],
            label: {
              normal: {
                show: true,
                position: "outer",
                formatter(params) {
                  return params.data.legendname;
                },
              },
            },
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true,
              },
            },
            clockwise: true, // 顺时针
            itemStyle: {
              borderWidth: 4,
              borderColor: "#fff",
            },
            data: [
              {
                value: 67,
                percent: "15.40%",
                legendname: "粉面粥店",
                name: "粉面粥店 | 15.40%",
              },
              {
                value: 97,
                percent: "22.30%",
                legendname: "简餐便当",
                name: "简餐便当 | 22.30%",
              },
              {
                value: 92,
                percent: "21.15%",
                legendname: "汉堡披萨",
                name: "汉堡披萨 | 21.15%",
              },
              {
                value: 85,
                percent: "17.69%",
                legendname: "香锅冒菜",
                name: "香锅冒菜 | 17.69%",
              },
              {
                value: 83,
                percent: "17.18%",
                legendname: "小吃炸串",
                name: "小吃炸串 | 17.18%",
              },
              {
                value: 50,
                percent: "6.67%",
                legendname: "地方菜系",
                name: "地方菜系 | 6.67%",
              },
            ],
          },
        ],
      };
      const dom = document.getElementById("category-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-view {
  margin-top: 20px;
  display: flex;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 429px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .v-charts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          margin-top: 15px;
          display: flex;
          justify-content: flex-end;
        }
      }
      .category-chart {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
