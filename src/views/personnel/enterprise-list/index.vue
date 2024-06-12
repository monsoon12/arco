<template>
  <div class="container course-management">
    <Breadcrumb :items="['人员管理', '企业管理']" />
    <a-card class="general-card" >
<!--      <a-row :gutter="{xxl:24}" justify="space-between">-->
<!--        <a-col  :xxl="15" :xl="16" :lg="16" :md="24" :sm="24" :xs="24" wrap>-->
<!--          <a-form-->
<!--            :model="formModel"-->
<!--            auto-label-width-->
<!--          >-->
<!--            <a-row  justify="space-between" wrap>-->
<!--              <a-col  :xxl="9" :xl="8" :lg="7" :md="8" :sm="12" :xs="24">-->
<!--                <a-form-item-->
<!--                  field="number"-->
<!--                  label="关键词"-->
<!--                >-->
<!--                  <a-input  placeholder="请输入关键词" allow-clear />-->
<!--                </a-form-item>-->
<!--              </a-col>-->

<!--              <a-col  :xxl="9" :xl="8" :lg="7" :md="8" :sm="12" :xs="24">-->
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
<!--        <a-col flex="82px" class="add-a-col">-->
<!--          <a-space  style="margin-bottom: 20px;" :size="10">-->
<!--            <a-button type="primary" @click="addChild">-->
<!--              新增企业-->
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
              <a-col :span="12">
                <a-form-item
                    field="number"
                    label="关键词"
                >
                  <a-input  placeholder="请输入关键词" allow-clear />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item field="name" label="状态分类">
                  <a-select
                      v-model="formModel.contentType"
                      :options="contentTypeOptions"
                      :placeholder="'请选择状态分类'"
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
              新增企业
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

        :table-layout-fixed="true"
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

    <a-modal class="add-curriculum" align-center title-align="start" v-model:visible="visible" title="新增/修改企业" @cancel="handleCancel" @before-ok="handleBeforeOk">
      <a-form ref="formDom" :model="form"  auto-label-width  @submit-success="submitSuccess" v-if="isUpload">
        <a-form-item
            field="file"
            label="企业名称"
            :rules="[
                {
                  required: true,
                },
            ]"
        >
          <a-input

              :placeholder="'请输入您的公司'"
          />
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
      title: '企业',
      dataIndex: 'contentType',
      width: 250,
    },
    {
      title: '状态',
      dataIndex: 'status',
      slotName: 'status',
      width: 100,
    },
    {
      title: '创建人',
      dataIndex: 'contentType',
      slotName: 'contentType',
      width: 150,
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      width: 200,
    },

    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      width: 250,
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
            "number": "87",
            "name": "WYROPA",
            "contentType": "verticalVideo",
            "count": "32",
            "status": "offline",
            "filterType": "rules",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Gj-5Im-2Ns-2Un-5Gs-3Bj-5Xh-5Kr-8",
            "number": "338",
            "name": "UGCXZLZF",
            "contentType": "img",
            "count": "31",
            "status": "offline",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Gb-8Wm-5Ke-8Gg-3Vw-4Dv-5Hn-1Jg-8",
            "number": "14",
            "name": "COXVA",
            "contentType": "verticalVideo",
            "count": "224",
            "status": "online",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Ph-1Rr-9Dx-6Wp-0Hv-2Vm-5Fu-7Dg-3",
            "number": "15",
            "name": "WDFGFKGQ",
            "contentType": "verticalVideo",
            "count": "488",
            "status": "offline",
            "filterType": "rules",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Uz-6Jw-5Oq-4Kc-7Vk-4Xd-1Lc-2Iv-5",
            "number": "532",
            "name": "UYKFMFMW",
            "contentType": "horizontalVideo",
            "count": "939",
            "status": "offline",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Df-2Zr-3We-8Ae-5Lh-5Gy-1Oh-9Kf-9",
            "number": "73",
            "name": "IXVGEN",
            "contentType": "horizontalVideo",
            "count": "208",
            "status": "offline",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Tk-4Lx-5Lf-2Wl-1Nx-7Bk-4Tz-2Ls-0",
            "number": "702",
            "name": "GFNXH",
            "contentType": "horizontalVideo",
            "count": "42",
            "status": "online",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Fu-3Jz-9Gq-8Je-7Of-1Bj-4It-6To-7",
            "number": "611",
            "name": "RHDBFT",
            "contentType": "horizontalVideo",
            "count": "812",
            "status": "offline",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Qh-3Ux-6Nl-3Gf-7Yi-8Bt-1Ic-0Gt-3",
            "number": "14",
            "name": "WYJMU",
            "contentType": "horizontalVideo",
            "count": "742",
            "status": "offline",
            "filterType": "artificial",
            "createdTime": "1979-11-05 11:47:40"
          },
          {
            "id": "Wh-5Ru-8Lj-9Ps-9Cu-7Md-1Bl-9Qq-1",
            "number": "882",
            "name": "DBBWU",
            "contentType": "horizontalVideo",
            "count": "80",
            "status": "online",
            "filterType": "rules",
            "createdTime": "1979-11-05 11:47:40"
          }
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
    visible.value = true
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


  };

  const handleCancel = () => {
    visible.value = false;

  }

  const customRequest = (option) => {
    // const {onProgress, onError, onSuccess, fileItem, name} = option
    form.time = option ;

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
