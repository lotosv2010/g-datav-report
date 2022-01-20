<template>
  <div>
    <common-card :title="`今日交易用户数`" :value="`81,014`">
      <template>
        <div
          id="today-users-chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin.js";
import echarts from "@/plugins/echarts.js";
export default {
  name: "TodayUsers",
  mixins: [commonCardMixin],
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const option = {
        tooltip: {},
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: true, // 与x轴两侧的间距
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
          ],
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
            type: "bar",
            barWidth: "60%",
            smooth: true,
            itemStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            data: [140, 232, 101, 64, 290, 140, 50, 99, 67, 190, 300, 200],
          },
        ],
      };
      const dom = document.getElementById("today-users-chart");
      echarts.init(dom, null, { renderer: "svg" }).setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped></style>
