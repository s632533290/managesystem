<template>
  <div>
    <a-button type="primary" @click="visible = true">添加</a-button>
    <a-modal
        v-model:visible="visible"
        title="Create a new collection"
        ok-text="Create"
        cancel-text="Cancel"
        @ok="onOk"
    >
      <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item
            name="title"
            label="Title"
            :rules="[{ required: true, message: 'Please input the title of collection!' }]"
        >
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item name="description" label="Description">
          <a-textarea v-model:value="formState.description" />
        </a-form-item>
        <a-form-item name="modifier" class="collection-create-form_last-form-item">
          <a-radio-group v-model:value="formState.modifier">
            <a-radio value="public">Public</a-radio>
            <a-radio value="private">Private</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, toRaw } from 'vue';
export default defineComponent({
  setup() {
    const formRef = ref();
    const visible = ref(false);
    const formState = reactive({
      title: '',
      description: '',
      modifier: 'public',
    });

    const onOk = () => {
      formRef.value.validateFields().then(values => {
        console.log('Received values of form: ', values);
        console.log('formState: ', toRaw(formState));
        visible.value = false;
        formRef.value.resetFields();
        console.log('reset formState: ', toRaw(formState));
      }).catch(info => {
        console.log('Validate Failed:', info);
      });
    };

    return {
      formState,
      formRef,
      visible,
      onOk,
    };
  },

});
</script>
<style>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>