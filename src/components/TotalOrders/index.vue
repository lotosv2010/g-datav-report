<template>
  <div>
    <common-card :title="`累计订单量`" :value="`¥ 2,123,223`">
      <template>
        <div
          id="total-orders-chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>昨天订单量 </span>
        <span class="emphasis">¥ 2,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin.js";
import echarts from "@/plugins/echarts.js";
export default {
  name: "TotalOrders",
  mixins: [commonCardMixin],
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
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
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            data: [140, 232, 101, 64, 290, 140, 50, 99, 67, 190, 300, 200],
          },
        ],
      };
      const dom = document.getElementById("total-orders-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#total-orders-chart {
  height: 100%;
}
</style>
