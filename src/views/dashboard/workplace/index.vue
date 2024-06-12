<template>
  <div class="container home-container">
    <div class="left-side">
      <div class="panel">
        <Banner />
        <DataPanel/>
        <div style="min-height: 390px">
          <ContentChart v-if="isInterval2" :oInterval="oInterval"/>
        </div>

      </div>
      <div>
        <a-row class="add-or-establish"  align="center" justify="center">
          <a-col :span="8" class="item-a-col">
            <span class="icon-plus-circle"></span>
            添加课程
          </a-col>
          <a-col :span="8" class="item-a-col">
            <span class="icon-plus-circle"></span>
            添加试卷
          </a-col>
          <a-col :span="8" class="item-a-col">
            <span class="icon-plus-circle"></span>
            添加培训
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';
  import Banner from './components/banner.vue';
  import DataPanel from './components/data-panel.vue';
  import ContentChart from './components/content-chart.vue';

  const oInterval = ref('auto')
  const isInterval = ref(true)
  const isInterval2 = ref(true)
  const handleResize = () => {
    if (window.innerWidth < 875 ){
      oInterval.value = '3'
    }else {
      oInterval.value = 'auto'
    }
    isInterval2.value = false
    setTimeout(function () {
      isInterval2.value = true
    },10)
  }
  handleResize()
  window.onresize=function () {
    if (isInterval.value) {
      isInterval.value = false
      handleResize()
      setTimeout(() => {
        isInterval.value = true
      },1500)
    }
  }
</script>

<!--<script lang="ts">-->
<!--  export default {-->
<!--    name: 'Dashboard', // If you want the include property of keep-alive to take effect, you must name the component-->

<!--  };-->
<!--</script>-->

<style lang="less" scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    padding-bottom: 0;
    display: flex;
  }

  .left-side {
    flex: 1;
    overflow: auto;
  }

  .right-side {
    width: 280px;
    margin-left: 16px;
  }

  .panel {
    background-color: var(--color-bg-2);
    border-radius: 4px;
    overflow: auto;
  }
  :deep(.panel-border) {
    margin-bottom: 0;
    border-bottom: 1px solid rgb(var(--gray-2));
  }
  .moduler-wrap {
    border-radius: 4px;
    background-color: var(--color-bg-2);
    :deep(.text) {
      font-size: 12px;
      text-align: center;
      color: rgb(var(--gray-8));
    }

    :deep(.wrapper) {
      margin-bottom: 8px;
      text-align: center;
      cursor: pointer;

      &:last-child {
        .text {
          margin-bottom: 0;
        }
      }
      &:hover {
        .icon {
          color: rgb(var(--arcoblue-6));
          background-color: #e8f3ff;
        }
        .text {
          color: rgb(var(--arcoblue-6));
        }
      }
    }

    :deep(.icon) {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
      color: rgb(var(--dark-gray-1));
      line-height: 32px;
      font-size: 16px;
      text-align: center;
      background-color: rgb(var(--gray-1));
      border-radius: 4px;
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  .mobile {
    .container {
      display: block;
    }
    .right-side {
      // display: none;
      width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
</style>
