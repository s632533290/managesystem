<template>
  <div>
    <a-button type="link" @click="showModal">{{buttonName}}</a-button>
    <a-modal v-model:visible="visible" title='提示' @ok="handleOk">
      <p>{{ msg }}</p>
    </a-modal>
  </div>
</template>
<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  props: {
    msg: String,
    buttonName: String
  },
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = e => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      showModal,
      handleOk,
    };
  },

});
</script>