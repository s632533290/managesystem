<template>
  <a-layout>
    <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
    >
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">>
        <img src="./assets/deloitte-logo.png" width="150" style="margin:20px">

        <a-menu-item key="1">
          <AreaChartOutlined/>
          <router-link to="/BIView">BI</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <FileSearchOutlined/>
          <router-link to="/fileManage">file Manage</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined/>
          <router-link to="/tableView" style="margin:10px">qwe</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined/>
          <router-link to="/gameView">game</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }"/>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '700px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        ManageSystem
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {AreaChartOutlined, FileSearchOutlined, UploadOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  components: {
    AreaChartOutlined,
    FileSearchOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = broken => {
      console.log(broken);
    };

    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
    };
  },

});
</script>
<style>
a {
  margin: 10px
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
