<template>
  <div>
    <common-card :title="`累计销售额`" :value="`¥ 32,039,165`">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{ totalSales.day }}</span>
            <i class="el-icon-caret-top"></i>
          </div>
          <div class="compare">
            <span>月同比 </span>
            <span class="emphasis">{{ totalSales.month }}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨天销售额 </span>
        <span class="emphasis">{{ totalSales.value }}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin.js";
import commonDataMixin from "@/mixins/commonDataMixin.js";
export default {
  name: "TotalSales",
  mixins: [commonCardMixin, commonDataMixin],
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-top: 3px;
    color: #666;
  }
}
</style>
