<template>
  <div class="container train-check">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <div>
      <a-form
          ref="formRef"
          :model="formData"
          :label-col-props="{ xxl:5,xl:7,lg:8,md:9,sm:6,xs:7 }"
          :wrapper-col-props="{ xxl: 10,xl:16,lg:16,md:15,sm:17,xs:17 }"
      >
        <a-card class="general-card" :title="'基础信息:'">
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value1"
                  label="培训名称："

              >
                <span>2024年5月份安全生产管理培训</span>
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value2"
                  label="培训类型："

              >
                <span>培训类型</span>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value3"
                  label="课程："

              >
                <div class="train-check-curriculum" style="width: 100%;">
                  <p>GB9001-企业安全生产管理.doc</p>
                  <p>GB9001-企业安全生产管理.doc</p>
                </div>

              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value4"
                  label="是否考试："

              >
                <span>是</span>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >

            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value5"
                  label="选择试卷："
              >

                <span>2024年5月企业安全生产管理</span>
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value6"
                  label="允许重考次数："
              >
                <span>10</span>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="general-card" :title="'配置信息'">
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value7"
                  label="企业："
              >
                <a-input disabled v-model="formData.value7" placeholder="请输入您的企业名称" />
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value8"
                  label="选择部门："

              >
                <span>综合服务部/保卫科、综合服务部/维修科</span>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" >
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24" style="white-space:nowrap; ">
              <a-form-item
                  class="form-item"
                  field="value9"
                  label="人员类型："

              >
                <a-radio-group v-model="formData.value9">
                  <a-radio value="A" disabled>全部</a-radio>
                  <a-radio value="B" disabled>内部员工</a-radio>
                  <a-radio value="C" disabled>外部员工</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value10"
                  label="培训时间："

              >
                <a-range-picker disabled v-model="formData.value10" />
              </a-form-item>
            </a-col>
          </a-row>

        </a-card>
        <a-card class="general-card" >
          <div class="arco-card-header" style="display:flex;align-items:center;border-bottom:none;padding: 0; ">
            <div class="arco-card-header-title" style="width: 20%;">
              培训结果
            </div>
            <div style="width: 80%;">
              <span>完成人数：10人</span>
              <span style="margin-left: 5vw;">未完成人数：10人</span>
              <span style="margin-left: 5vw;">合格人数：10人</span>
            </div>
          </div>
          <a-row style="margin-top: 20px;">
            <a-table class="table-train" :columns="columns" :data="data" :bordered="false" :pagination="false" column-resizable ></a-table>
          </a-row>
          <a-row class="button-right" justify="end" style="margin-top: 25px;">

              <a-form-item>
                <a-space>
                  <a-button  @click="onCancelClick">取消</a-button>
                  <a-button  type="primary" html-type="submit" @click="onPreserveClick">再次培训</a-button>
                </a-space>
              </a-form-item>

          </a-row>
        </a-card>
      </a-form>
    </div>

  </div>
</template>


<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick, } from 'vue';
import {FormInstance} from "@arco-design/web-vue/es/form";
import {BaseInfoModel} from "@/api/train";

const formRef = ref<FormInstance>();
const formData = ref<BaseInfoModel>({
  value1: '',
  value2: '',
  value3: '',
  value4: '',
  value5: '',
  value6: '',
  value7: '中国移动杭州分公司',
  value8: '',
  value9: 'B',
  value10: ['2024-06-01','2024-06-11'],
});
const columns = reactive([
  {
    title: '部门',
    dataIndex: 'name',
    width: 240,
  },
  {
    title: '姓名',
    dataIndex: 'salary',
    // width: 120,
  },
  {
    title: '是否培训',
    dataIndex: 'address',
    // width: 300,
  },
  {
    title: '是否通过考试',
    dataIndex: 'email',
  },
  {
    title: '重考次数',
    dataIndex: 'repeat',
  },
]);
const data = reactive([{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}]);
const onPreserveClick = () => {
  // const res = await formRef.value?.validate();
  // if (!res){
  //
  // }
}

const onCancelClick = ()=>{
  Object.keys(formData.value).forEach((key,index) => {
    console.log(formData.value[key]);
    formData.value[key] = ''
  })

}
</script>

<style scoped lang="less">

.arco-radio-checked.arco-radio-disabled .arco-radio-label{
  color: #666666;
}
.train-check-curriculum {
  p{
    display: flex;
    align-items: center;
    height: 32px;
    margin: 5px 0;
  }
  p:first-of-type{margin-top: 0;}
  p:last-of-type{margin-bottom: 0;}
}
.add-step{
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.button-all{
  button{
    width: 170px;
  }
}
</style>

