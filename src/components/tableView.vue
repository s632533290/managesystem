<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1"><BIView></BIView></a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BIView from "@/components/BIView";
export default defineComponent({
  components: {
    BIView
  },
  setup() {
    return {
      activeKey: ref('1'),
    };
  },

});
</script>