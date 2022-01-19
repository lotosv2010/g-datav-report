<template>
  <div>
    <common-card />
  </div>
</template>

<script>
import commonCardMixin from "@/mixins/commonCardMixin.js";
export default {
  name: "TodayUsers",
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped></style>
