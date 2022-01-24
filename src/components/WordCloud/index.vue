<template>
  <div id="word-cloud" class="chart"></div>
</template>

<script>
import echarts from "@/plugins/echarts.js";
import data from "./data.json";

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
            type: "wordCloud",
            shape: "circle",
            gridSize: 2,
            drawOutOfBound: true,
            textStyle: {
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(",") +
                  ")"
                );
              },
            },
            data,
          },
        ],
      };
      const dom = document.getElementById("word-cloud");
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
