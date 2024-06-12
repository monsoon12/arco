<template>
  <div>
    <a-row  wrap justify="end" style="padding: 0 16px" class="day-week-month">
      <a-radio-group v-model="position" type="button" size="large">
        <a-radio value="top">本日</a-radio>
        <a-radio value="right">本周</a-radio>
        <a-radio value="bottom">本月</a-radio>
      </a-radio-group>
      <a-divider class="panel-border" style="margin-top: 10px" />
    </a-row>

    <a-grid :cols="24" :row-gap="16" class="panel">
      <a-grid-item
          class="panel-col"
          :span="{ xxl: 6, xl: 12, lg: 12, md: 12,  sm: 12,xs: 12 }"

      >
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
              title="今日在线人数"
              :value="oValueData['learning_crowd']"
              :value-from="0"
              animation
              show-group-separator
          >
            <template #suffix>
              <div class="rise-decline">
                <span class="unit">{{ $t('workplace.pecs') }}</span>
                <span class="decline"></span>
                <span class="color-text color-text-green"><i class="text1">-3</i> <i class="text2">-0.63%</i> </span>
              </div>

            </template>
          </a-statistic>
        </a-space>
      </a-grid-item>
      <a-grid-item
          class="panel-col"
          :span="{ xxl: 6, xl: 12, lg: 12, md: 12,  sm: 12,xs: 12 }"
      >
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
              title="今日学习人数"
              :value="oValueData['learning_duration']"
              :value-from="0"
              animation
              show-group-separator
          >
            <template #suffix>
              <div class="rise-decline">
                <span class="unit">人</span>
                <span class="rise"></span>
                <span class="color-text color-text-red"><i class="text1">-56</i> <i class="text2">-21%</i> </span>
              </div>

            </template>
          </a-statistic>
        </a-space>
      </a-grid-item>
      <a-grid-item
          class="panel-col"
          :span="{ xxl: 6, xl: 12, lg: 12, md: 12,  sm: 12,xs: 12 }"
      >
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
              title="今日课程完成人数"
              :value="oValueData['learning_online']"
              :value-from="0"
              animation
              show-group-separator
          >
            <template #suffix>
              <div class="rise-decline">
                <span class="unit">{{ $t('workplace.pecs') }}</span>
                <span class="rise"></span>
                <span class="color-text color-text-red"><i class="text1">-10</i> <i class="text2">-13%</i> </span>
              </div>

            </template>
          </a-statistic>
        </a-space>
      </a-grid-item>
      <a-grid-item
          class="panel-col"
          :span="{ xxl: 6, xl: 12, lg: 12, md: 12,  sm: 12,xs: 12 }"
          style="border-right: none"
      >
        <a-space>
          <a-avatar :size="54" class="col-avatar">
            <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"
            />
          </a-avatar>
          <a-statistic
              title="今日学习时长"
              :value="oValueData['curriculum_total']"
              :value-from="0"
              animation
          >
            <template #suffix>
              <div class="rise-decline">
                <span class="unit">小时</span>
                <span class="decline"></span>
                <span class="color-text color-text-green"><i class="text1">-33</i> <i class="text2">-33%</i> </span>
              </div>

            </template>
          </a-statistic>
        </a-space>
      </a-grid-item>

      <a-grid-item :span="24">
        <a-divider class="panel-border" />
      </a-grid-item>
    </a-grid>
  </div>

</template>

<script lang="ts" setup>
  import {ref} from "vue";
  // import bannerImage from '@/assets/images/login-banner.png';
  const oValueData = {
    "learning_crowd":452,   //  今日学习人数
    "learning_duration":6,   //  今日学习时长
    "learning_online":951,   //  今日在线人数
    "curriculum_total":66,    // 课程总数
    "subject_total":760,       // 试题总数
    "examination_total":58,   //  考试总数
  }
  const position = ref('top');
</script>

<style lang="less" scoped>
  .arco-grid.panel {
    margin-bottom: 0;
    padding: 16px 20px 0 20px;
  }
  .panel-col {
    padding-left: 43px;
    border-right: 1px solid rgb(var(--gray-2));
  }
  .col-avatar {
    margin-right: 12px;
    background-color: var(--color-fill-2);
  }
  .up-icon {
    color: rgb(var(--red-6));
  }
  .unit {
    margin-left: 8px;
    color: rgb(var(--gray-8));
    font-size: 12px;
  }
  :deep(.panel-border) {
    margin: 4px 0 0 0;
  }
</style>
