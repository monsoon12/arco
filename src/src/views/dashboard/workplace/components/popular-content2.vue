<template>

  <a-spin :loading="loading" style="width: 100%">
    <a-card
        class="general-card"
        :header-style="{ paddingBottom: '0' }"
        :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>今日学员排行</template>
      <a-space direction="vertical" :size="10" fill>
        <a-table
            :pagination="false"
            :bordered="false"
            :columns="columns"
            :data="renderList"
            :scroll="{ x: '100%', y: '264px' }"
            row-class="common-row"
        >
          <template #tr>
            <tr/>
          </template>
          <template #td>
            <td/>
          </template>
        </a-table>
      </a-space>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryPopularList } from '@/api/dashboard';
  import type { TableData } from '@arco-design/web-vue/es/table/interface';
  import {queryHomeList} from "@/api/home-list";

  const type = ref('text');
  const { loading, setLoading } = useLoading();
  let renderList:any = [];
  const fetchData = async (contentType: string) => {
    try {
      setLoading(true);
      renderList = await queryHomeList({type: contentType})
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const columns =  [
    {
      title: '排名',
      dataIndex: 'key',
      width: 70,
    },
    {
      title: '姓名',
      dataIndex: 'curriculum',
      width: 100,
    },
    {
      title: '学习课程数',
      dataIndex: 'duration',
      width: 130,
    },
    {
      title: '学习时长',
      dataIndex: 'number',
      width: 100,
    },

  ];

  fetchData('1')
</script>

<style scoped lang="less">
  .general-card {
    min-height: 395px;
  }
  :deep(.arco-table-tr) {
    height: 44px;
    .arco-typography {
      margin-bottom: 0;
    }
  }
  .increases-cell {
    display: flex;
    align-items: center;
    span {
      margin-right: 4px;
    }
  }
</style>
