<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>今日热门课程</template>
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
import useLoading from '@/hooks/loading';

import {queryHomeList} from '@/api/home-list';


interface TabItem {
    key: string;
    curriculum: string,
    duration: string,
    number: string,
    average: string
  }

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
      title: '课程名称',
      dataIndex: 'curriculum',
      width: 100,
    },
    {
      title: '学习时长',
      dataIndex: 'duration',
      width: 100,
    },
    {
      title: '学习人数',
      dataIndex: 'number',
      slotName: 'contentType',
      width: 100,
    },
    {
      title: '人均学习时长',
      dataIndex: 'average',
      width: 130,
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
