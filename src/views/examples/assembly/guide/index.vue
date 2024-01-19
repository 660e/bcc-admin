<template>
  <div class="card h-full p-5 space-y-5">
    <div id="a">引导页</div>
    <el-alert
      title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."
      type="warning"
      id="b"
      :closable="false"
    />
    <el-button type="primary" id="c" @click.prevent.stop="driverObj.drive()">打开引导页</el-button>
  </div>
</template>

<script setup lang="ts" name="guide">
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverObj = driver({
  allowClose: true,
  doneBtnText: '结束',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  steps: [
    {
      element: '#a',
      popover: {
        title: 'Collapse Icon',
        description: 'Open && Close sidebar',
        side: 'bottom'
      }
    },
    {
      element: '#b',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        side: 'top'
      }
    },
    {
      element: '#c',
      popover: {
        title: 'Switch Assembly Size',
        description: 'Switch the system size',
        side: 'right'
      }
    }
  ]
});
</script>
