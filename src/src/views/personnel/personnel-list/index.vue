<template>
  <div class="container course-management">
    <Breadcrumb :items="['人员管理', '人员管理列表']" />
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
<!--              <a-col  :xxl="5" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="number"-->
<!--                  label="关键词"-->
<!--                >-->
<!--                  <a-input  placeholder="请输入关键词" allow-clear />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item field="name" label="部门">-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请选择部门'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="contentType"-->
<!--                  label="职位"-->
<!--                >-->
<!--                  <a-select-->
<!--                    v-model="formModel.contentType"-->
<!--                    :options="contentTypeOptions"-->
<!--                    :placeholder="'请选择职位'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col  :xxl="5" :xl="6" :lg="11" :md="11" :sm="24" :xs="24">-->
<!--                <a-form-item-->
<!--                    field="contentType"-->
<!--                    label="状态"-->
<!--                >-->
<!--                  <a-select-->
<!--                      v-model="formModel.contentType"-->
<!--                      :options="contentTypeOptions"-->
<!--                      :placeholder="'请选择状态'"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col flex="174px"  :xxl="{span:4}" :xl="4" :lg="11" :md="11" :sm="{span:5}" class="search-button-all" >-->
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
<!--            <a-button type="primary" @click="exportToExcel">-->
<!--              导出培训-->
<!--            </a-button>-->
<!--            <a-button type="primary">-->
<!--              批量导入-->
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
                    label="关键词"
                >
                  <a-input  placeholder="请输入关键词" allow-clear />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" label="部门">
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择部门'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                    field="contentType"
                    label="职位"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择职位'"
                  />
                </a-form-item>
              </a-col>


              <a-col :span="8">
                <a-form-item
                    field="contentType"
                    label="状态"
                >
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择状态'"
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
            <a-button type="primary" @click="addHandleBeforeOk">
              新增人员
            </a-button>
            <a-button type="primary" @click="handleBeforeOk">
              批量导入
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

    <a-modal class="add-curriculum" align-center  v-model:visible="visible" title="用户信息批量上传" @cancel="handleCancel" @before-ok="handleBeforeOk">
      <a-form ref="formDom" :model="form"  auto-label-width  @submit-success="submitSuccess" v-if="isUpload">
        <a-form-item
            field="file"
            label="上传模板"
            :rules="[
                {
                  required: true,
                },
            ]"
        >
          <a href="" style="color: rgb(var(--primary-6))">人员信息模版.xls</a>
        </a-form-item>
        <a-form-item
            field="time"
            label="上传文件"
            :rules="[
                {
                  required: true,
                  message: '请上传文件',
                },
            ]"
        >
          <a-upload
              id="upload-xls"
              :file-list="form.time"
              @change="customRequest"

          />
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
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
  const visible2 = ref(true);
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
  const router = useRouter()
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
      title: '姓名',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '企业',
      dataIndex: 'value1',
      slotName: 'value1',
      width: 100,
    },
    {
      title: '部门',
      dataIndex: 'value2',
      slotName: 'value2',
      width: 150,
    },
    {
      title: '职位',
      dataIndex: 'value3',
      width: 150,
    },

    {
      title: '状态',
      dataIndex: 'status',
      slotName: 'status',
      width: 100,
    },
    {
      title: '创建人',
      dataIndex: 'value4',
      slotName: 'value4',
      width: 120,
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      slotName: 'createdTime',
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      width: 220,
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
      // const {data} = await queryPolicyList(params);
      // console.log(data)
      const data = {
        "list": [
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "小明",
            "createdTime": "1979-11-05 11:47:40",
            "status": "offline",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "小黄",
            "createdTime": "1979-11-05 11:47:40",
            "status": "online",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
            },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "小黄",
            "createdTime": "1979-11-05 11:47:40",
            "status": "online",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "offline",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "online",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "offline",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "online",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "online",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "offline",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
          {
            "id": "Fv-5Ib-3Bq-6Dl-2Vg-9Vo-3Ho-6Rd-2",
            "name": "王铭",
            "createdTime": "1979-11-05 11:47:40",
            "status": "offline",
            "value1": "87",
            "value2": "verticalVideo",
            "value3": "32",
            "value4": "rules",
            "value5": "rules",
            "value6": "rules",
            "value7": "rules",
            "value8": "rules",
          },
        ],
        "total": 55
      }
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

  const formDom = ref()
  const form = reactive({
    name: '',
    post: '',
    file: '',
    time:[],
    chapter:''
  });
  const isUpload = ref(true);


  const submitSuccess = () =>{

    Message.success('添加成功')
  }
  const handleBeforeOk = (done) => {

    visible.value = true;
  };

  const handleCancel = () => {
    visible.value = false;

  }

  const customRequest = (option) => {
    // const {onProgress, onError, onSuccess, fileItem, name} = option
    form.time = option ;

  };

  const addHandleBeforeOk = () => {
    router.push({
      name: 'personnel-setting',
    })
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
