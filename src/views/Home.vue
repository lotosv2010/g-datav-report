<template>
  <div class="dashboard">
    <TopView />
    <SalesView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from "@/components/TopView";
import SalesView from "@/components/SalesView";
import BottomView from "@/components/BottomView";
import MapView from "@/components/MapView";
// import { getWordCloud } from "../servers";
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  mounted() {
    // getWordCloud();
  },
};
</script>
<style scoped lang="scss">
.dashboard {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
}
</style>
