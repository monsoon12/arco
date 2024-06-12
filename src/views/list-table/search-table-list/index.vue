<template>
  <div class="container course-management">
    <Breadcrumb :items="['课程管理', '课程列表']" />
    <a-card class="general-card" >
<!--      <a-row :gutter="{xxl:24}" wrap justify="space-between">-->
<!--        <a-col  :xxl="18" :xl="20" :lg="20" :md="24" :sm="24" :xs="24" wrap>-->
<!--          <a-form-->
<!--            :model="formModel"-->

<!--            label-align="left"-->
<!--            auto-label-width-->
<!--          >-->
<!--            <a-row  justify="space-between" wrap>-->
<!--              <a-col  :xxl="6" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="number"-->
<!--                  label="课程名称"-->
<!--                >-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请输入课程名称'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="6" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item field="name" label="课程分类">-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请选择课程分类'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="6" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="contentType"-->
<!--                  label="下架状态"-->
<!--                >-->
<!--                  <a-select-->
<!--                    v-model="formModel.contentType"-->
<!--                    :options="contentTypeOptions"-->
<!--                    :placeholder="'请选择下架状态'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->

<!--              <a-col  :xxl="{span:4}" :xl="4" :lg="11" :md="11" :sm="{span:5}" class="search-button-all" >-->
<!--                <a-space  style="margin-bottom: 20px;" :size="10">-->
<!--                  <a-button @click="reset">-->
<!--                    <template #icon>-->
<!--                      <icon-refresh />-->
<!--                    </template>-->
<!--                    {{ $t('searchTable.form.reset') }}-->
<!--                  </a-button>-->
<!--                  <a-button type="primary" @click="search">-->
<!--                    <template #icon>-->
<!--                      <icon-search />-->
<!--                    </template>-->
<!--                    {{ $t('searchTable.form.search') }}-->
<!--                  </a-button>-->
<!--                </a-space>-->

<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-form>-->
<!--        </a-col>-->
<!--        <a-col flex="82px" class="add-a-col" @click="addChild">-->
<!--          <a-button type="primary">-->
<!--            <template #icon>-->
<!--              <icon-plus />-->
<!--            </template>-->
<!--            新增课程-->
<!--          </a-button>-->
<!--        </a-col>-->
<!--      </a-row>-->

      <a-row>
        <a-col :flex="1">
          <a-form
              :model="formModel"
              :label-col-props="{ span: 6 }"
              :wrapper-col-props="{ span: 18 }"
              auto-label-width
          >
            <a-row :gutter="16" justify="space-between" wrap>
              <a-col :span="8">
                <a-form-item
                    field="number"
                    label="课程名称"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请输入课程名称'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" label="课程分类">
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择课程分类'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                    field="contentType"
                    label="下架状态"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择下架状态'"
                  />
                </a-form-item>
              </a-col>

            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 32px" direction="vertical" />
        <a-col :flex="'175px'" style="text-align: right">
          <a-space  :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary"  @click="addChild">
              <template #icon>
                <icon-plus />
              </template>
              新增课程
            </a-button>
          </a-space>
        </a-col>

      </a-row>

      <a-table
        column-resizable
        row-key="id"
        :loading="loading"
        :columns="(cloneColumns as TableColumnData[])"
        :data="renderData"
        :bordered="false"
        :pagination="true"
      >
        <template #index="{ rowIndex }">
          {{ rowIndex + 1 + (pagination.current - 1) * pagination.pageSize }}
        </template>
        <template #contentType="{ record }">
          <a-space style="text-align: center">
            {{ $t(`searchTable.form.contentType.${record.contentType}`) }}
          </a-space>
        </template>
        <template #filterType="{ record }">
          {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ $t(`searchTable.form.status.${record.status}`) }}
        </template>
        <template #operations>
          <a-button v-permission="['admin']" type="text" size="small">编辑</a-button>
          <a-button v-permission="['admin']" type="text" size="small">禁用</a-button>
          <a-button v-permission="['admin']" type="text" size="small"> 删除</a-button>
        </template>
      </a-table>
    </a-card>

<!--    <a-row style="margin-top: 20px" class="list-pagination" justify="center">-->
<!--      <a-pagination-->
<!--          @change="onPageChange"-->
<!--          @page-size-change="onPageSizeChange"-->
<!--          :total="pagination.total"-->
<!--          :page-size="pagination.pageSize"-->
<!--          :current="pagination.current"-->
<!--          show-total-->
<!--          :show-jumper="pagination.showJumper"-->
<!--          :show-page-size="pagination.showPageSize"-->
<!--      />-->
<!--    </a-row>-->
  </div>
</template>

<script lang="ts" setup>

  import { computed, ref, reactive, watch, nextTick } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';
  import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import cloneDeep from 'lodash/cloneDeep';
  import Sortable from 'sortablejs';


  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };

  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formModel = ref(generateFormModel());
  const cloneColumns = ref<Column[]>([]);
  const showColumns = ref<Column[]>([]);

  const size = ref<SizeProps>('medium');


  const basePagination: Pagination = {
    current: 1,
    pageSize: 10,
  };
  const pagination = reactive({
    ...basePagination,
    showJumper:true,
    showPageSize:true,
    total:0,
  });

  const columns = computed<TableColumnData[]>(() => [
    {
      title: '序号',
      dataIndex: 'index',
      slotName: 'index',
      width: 80,
    },
    {
      title: '分类名称',
      dataIndex: 'contentType',
      width: 200,
    },
    {
      title: '发布状态',
      dataIndex: 'status',
      slotName: 'status',
      width: 150,
    },
    {
      title: '创建人',
      dataIndex: 'contentType',
      slotName: 'contentType',
      width: 150,
    },
    {
      title: '发布时间',
      dataIndex: 'createdTime',
      width: 200,
    },

    {
      title: '操作项',
      dataIndex: 'operations',
      slotName: 'operations',
      width: 300,
    },
  ]);
  const contentTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.contentType.img'),
      value: 'img',
    },
    {
      label: t('searchTable.form.contentType.horizontalVideo'),
      value: 'horizontalVideo',
    },
    {
      label: t('searchTable.form.contentType.verticalVideo'),
      value: 'verticalVideo',
    },
  ]);

  const fetchData = async (
    params: PolicyParams = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const {data} = await queryPolicyList(params);

      renderData.value = data.list;
      pagination.current = params.current;
      pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const search = () => {
    fetchData({
      ...basePagination,
      ...formModel.value,
    } as unknown as PolicyParams);
  };

  // 新建课程
  const getChild = ref(null)
  const addChild = () =>{
      console.log(getChild.value.handleClick())
  }

  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };
  const onPageSizeChange = (current: number) =>{
    pagination.pageSize = current
  }
  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };

  const handleChange = (
    checked: boolean | (string | boolean | number)[],
    column: Column,
    index: number
  ) => {
    if (!checked) {
      cloneColumns.value = showColumns.value.filter(
        (item) => item.dataIndex !== column.dataIndex
      );
    } else {
      cloneColumns.value.splice(index, 0, column);
    }
  };

  const exchangeArray = <T extends Array<any>>(
    array: T,
    beforeIdx: number,
    newIdx: number,
    isDeep = false
  ): T => {
    const newArray = isDeep ? cloneDeep(array) : array;
    if (beforeIdx > -1 && newIdx > -1) {
      // 先替换后面的，然后拿到替换的结果替换前面的
      newArray.splice(
        beforeIdx,
        1,
        newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
      );
    }
    return newArray;
  };



  watch(
    () => columns.value,
    (val) => {
      cloneColumns.value = cloneDeep(val);
      cloneColumns.value.forEach((item, index) => {
        item.checked = true;
      });
      showColumns.value = cloneDeep(cloneColumns.value);
    },
    { deep: true, immediate: true }
  );
</script>

<script lang="ts">
  export default {
    name: 'SearchTable',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
  .action-icon {
    margin-left: 12px;
    cursor: pointer;
  }
  .active {
    color: #0960bd;
    background-color: #e3f4fc;
  }
  .setting {
    display: flex;
    align-items: center;
    width: 200px;
    .title {
      margin-left: 12px;
      cursor: pointer;
    }
  }
</style>
