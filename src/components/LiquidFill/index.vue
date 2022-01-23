<template>
  <div id="liquid-fill" class="chart"></div>
</template>

<script>
import echarts from "@/plugins/echarts.js";

function getColor(value) {
  return value > 0 && value <= 0.5
    ? "rgba(97, 216, 0, .7)"
    : value > 0.5 && value <= 0.8
    ? "rgba(204, 178, 26, .7)"
    : value > 0.8
    ? "rgba(214, 47, 28, .7)"
    : "#c7c7cb";
}
export default {
  name: "LiquidFill",
  data() {
    return {
      chartData: [0.4506],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
        tooltip: {},
        series: [
          {
            type: "liquidFill",
            name: "支付转化率",
            radius: "80%",
            data: this.chartData,
            color: [getColor(this.chartData[0])],
            label: {
              formatter: function (param) {
                return (param.value * 100).toFixed(2) + "%";
              },
              color: "#999",
              fontWeight: 500,
              fontSize: 28,
              insideColor: "#fff",
            },
            backgroundStyle: {
              color: "#fff",
            },
            itemStyle: {
              shadowBlur: 0,
              shadowColor: "#fff",
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderColor: "#a4a4a4",
                borderWidth: 1,
                color: "none",
                shadowBlur: 0,
                shadowColor: "#fff",
              },
            },
          },
        ],
      };
      const dom = document.getElementById("liquid-fill");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
