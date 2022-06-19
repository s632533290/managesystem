<template>
  <a-row>
    <search-tool></search-tool>
  </a-row>

  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          项目名称
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <a-row>
          <message-box msg="https://test.deloitte.com/projectlink" button-name="查看映射链接"></message-box>
          <a-button type="link">upload</a-button>
          <a-button type="link">delete</a-button>
        </a-row>
      </template>
    </template>
  </a-table>
</template>
<script>
import searchTool from "@/filemanage/searchTool";
import {defineComponent} from 'vue';
import messageBox from "@/components/messageBox";
const columns = [{
  name: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
}, {
  title: 'Action',
  key: 'action',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
export default defineComponent({
  components: {
    searchTool,
    messageBox,
  },
  setup() {
    return {
      data,
      columns,
    };
  },

});
</script>