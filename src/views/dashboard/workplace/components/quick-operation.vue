<template>
  <a-card
    class="general-card"
    title="快速入口"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '24px 20px 0 20px' }"
  >
<!--    <template #extra>-->
<!--      <a-link>{{ $t('workplace.quickOperation.setup') }}</a-link>-->
<!--    </template>-->
    <a-row :gutter="8">
      <a-col v-for="link in links" :key="link.text" :span="8" class="wrapper">
        <div class="icon">
          <component :is="link.icon" />
        </div>
        <a-typography-paragraph class="text">
          {{ link.text }}
        </a-typography-paragraph>
      </a-col>
    </a-row>
    <a-divider class="split-line" style="margin: 0" />
  </a-card>
</template>

<script lang="ts" setup>
  const links = [
    { text: '添加课程', icon: 'icon-file' },
    { text: '添加试卷', icon: 'icon-storage' },
    { text: '新增培训计划', icon: 'icon-mobile' },

  ];
</script>

<style scoped lang="less"></style>
