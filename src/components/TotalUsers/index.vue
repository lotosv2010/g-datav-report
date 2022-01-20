<template>
  <div>
    <common-card :title="`累计用户数`" :value="`1,087,503`">
      <template>
        <div
          id="total-users-chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">8.73%</span>
            <i class="el-icon-caret-top"></i>
          </div>
          <div class="compare">
            <span>月同比 </span>
            <span class="emphasis">35.91%</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin.js";
import echarts from "@/plugins/echarts.js";
export default {
  name: "TotalUsers",
  mixins: [commonCardMixin],
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
        color: ["#87f7cf"],
        tooltip: {},
        xAxis: {
          show: false,
          type: "value",
          max: 250,
        },
        yAxis: {
          show: false,
          type: "category",
        },
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
        series: [
          {
            type: "bar",
            barWidth: 10,
            stack: "总量",
            data: [200],
          },
          {
            type: "bar",
            stack: "总量",
            silent: true,
            data: [250],
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            // stack: "总量",
            data: [200],
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              console.log(endPoint);
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d: "M209.656 344.031l298.604 335.938 306.084-335.839-604.688-0.099z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#87f7cf",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M512 341.333333l-298.666667 298.666667h597.333334z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#87f7cf",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
      const dom = document.getElementById("total-users-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  display: flex;
  .compare {
    &:last-child {
      margin-left: 10px;
    }
  }
}
</style>
