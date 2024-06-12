<template>
  <div class="container course-management">
    <Breadcrumb :items="['课程管理', '课程列表']" />
    <a-card class="general-card" >
<!--      <a-row :gutter="{xxl:24}" justify="space-between">-->
<!--        <a-col  :xxl="20" :xl="24" :lg="24" :md="24" :sm="24" :xs="24" wrap>-->
<!--          <a-form-->
<!--            :model="formModel"-->
<!--            :label-col-props="{ xxl:6,xl:8,lg:6,md:6,sm:6,xs:8 }"-->
<!--            :wrapper-col-props="{ xxl: 15,xl:14,lg:14,md:14,sm:14,xs:15 }"-->

<!--            auto-label-width-->
<!--          >-->
<!--            <a-row  justify="space-between" wrap>-->
<!--              <a-col class="first"  :xxl="5" :xl="5" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="number"-->
<!--                  label="培训名称"-->
<!--                >-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请输入培训名称'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="5" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item field="name" label="课程类型">-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请选择课程类型'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="5" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="contentType"-->
<!--                  label="启用状态"-->
<!--                >-->
<!--                  <a-select-->
<!--                    v-model="formModel.contentType"-->
<!--                    :options="contentTypeOptions"-->
<!--                    :placeholder="'请选择启用状态'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="5" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                    field="contentType"-->
<!--                    label="是否考试"-->
<!--                >-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请选择是否考试'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col flex="174px"  :xxl="{span:5}" :xl="4" :lg="11" :md="11" :sm="{span:5}" class="search-button-all" >-->
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
<!--          <a-space  style="margin-bottom: 20px;" :size="10">-->
<!--            <a-button type="primary" @click="handleClick">-->
<!--              导出培训结果-->
<!--            </a-button>-->
<!--            <a-button type="primary">-->
<!--              新增培训-->
<!--            </a-button>-->
<!--          </a-space>-->
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
                    label="培训名称"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请输入培训名称'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" label="课程类型">
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择课程类型'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                    field="contentType"
                    label="是否考试"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择是否考试'"
                  />
                </a-form-item>
              </a-col>


              <a-col :span="8">
                <a-form-item
                    field="contentType"
                    label="启用状态"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择启用状态'"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
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
            <a-button type="primary" @click="exportVisible">
              导出培训结果
            </a-button>
            <a-button type="primary" @click="addVisible">
              新增培训
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

    <a-modal class="add-curriculum" align-center  v-model:visible="visible" title="设置培训时间" @cancel="addHandleCancel" @before-ok="addHandleBeforeOk">
      <a-form ref="formDom" :model="form"  auto-label-width :rules="rules" @submit-success="submitSuccess" v-if="isUpload">
        <a-form-item field="name" label="培训时间" >
          <a-range-picker />
        </a-form-item>

        <a-form-item field="file" label="人员类型" >
          <a-radio-group v-model="formModel.filterType">
            <a-radio value="A" >全部</a-radio>
            <a-radio value="B" >内部员工</a-radio>
            <a-radio value="C" >外部员工</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="time" label="选择人员" >
          <a-select
              style="width: 300px;"
              v-model="formModel.filterType"
              placeholder="请您选择权限类型"
          >
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option>Shenzhen</a-option>
            <a-option>Chengdu</a-option>
            <a-option>Wuhan</a-option>
          </a-select>
          <a-button style="border-radius: 0 5px 5px 0;width: 85px;" type="primary">重置</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal class="add-curriculum" align-center  v-model:visible="visible2" title="培训记录导出" @cancel="exportHandleCancel" @before-ok="exportHandleBeforeOk">
      <a-form ref="formDom" :model="form"  auto-label-width :rules="rules" @submit-success="submitSuccess" v-if="isUpload">
        <a-form-item field="name" label="培训时间" >
          <a-range-picker style="width: 100%" />
        </a-form-item>

        <a-form-item
            field="time"
            label="课程分类"
            :rules="[{
                required: true,
                message: '请您选择权限类型',
              },
            ]"
        >
          <a-select
              v-model="formModel.filterType"
              placeholder="请您选择课程分类"
          >
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option>Shenzhen</a-option>
            <a-option>Chengdu</a-option>
            <a-option>Wuhan</a-option>
          </a-select>

        </a-form-item>
        <a-form-item
            field="time"
            label="课程属性"
            :rules="[{
                required: true,
                message: '请您选择权限类型',
              },
            ]"
        >
          <a-select

              v-model="formModel.filterType"
              placeholder="请您选择课程分类"
          >
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option>Shenzhen</a-option>
            <a-option>Chengdu</a-option>
            <a-option>Wuhan</a-option>
          </a-select>

        </a-form-item>
      </a-form>
    </a-modal>
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
  import * as XLSX from 'xlsx';
  import {saveAs} from 'file-saver';
  import {Message} from "@arco-design/web-vue";


  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };
  const visible = ref(false);
  const visible2 = ref(false);
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

  //   // 导出
  const exportToExcel = () => {
    // 假设我们有一个表格数据的ref
    const data = ref([
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Doe', email: 'jane@example.com' }
    ]);

    // 为了创建工作表，我们需要一个二维数组
    const worksheet = XLSX.utils.json_to_sheet(data.value.map(row => ({...row})));

    // 创建工作簿并添加工作表
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // 生成Excel文件
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // 使用blob和saveAs下载文件
    const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(dataBlob, 'data.xlsx');
  };



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

  const formDom = ref()
  const form = reactive({
    name: '',
    post: '',
    file: '',
    time:'',
    chapter:''
  });
  const isUpload = ref(true);

  const rules = {
    name: [{
      required: true,
      message:'请输入课程名称',
    },
    ],
    post: [{
      required: true,
      message:'请选择课程分类',
    },
    ],
    file: [{
      required: true,
      message:'请上传文档',
    },
    ],
  }

  const exportVisible = () => {
    visible.value = true;
  };
  const addVisible = () => {
    visible2.value = true;
  };
  const submitSuccess = () =>{

    Message.success('添加成功')
  }
  const exportHandleBeforeOk = (done) => {
    exportToExcel();
  };

  const exportHandleCancel = () => {
    visible.value = false;
  }

  const addHandleBeforeOk = (done) => {
    exportToExcel();
  };

  const addHandleCancel = () => {
    visible.value = false;
  }



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
