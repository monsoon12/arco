<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <div>
      <a-form
          ref="formRef"
          :model="formData"
          :label-col-props="{ xxl:5,xl:7,lg:8,md:9,sm:7,xs:7 }"
          :wrapper-col-props="{ xxl: 15,xl:16,lg:14,md:14,sm:17,xs:17 }"
      >
        <a-card class="general-card" :title="'基础信息'">
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value1"
                  label="培训名称"
                  :rules="[
                    {
                      required: true,
                      message: '请输入您的培训名称',
                    },
                ]"
              >
                <a-input  v-model="formData.value1" placeholder="请输入您的培训名称" />
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value2"
                  label="培训类型"
                  :rules="[{
                      required: true,
                      message: '请您选择权限类型',
                    },
                  ]"
              >
                <a-select
                    v-model="formData.value2"
                    placeholder="请您选择权限类型"
                >
                  <a-option>Beijing</a-option>
                  <a-option>Shanghai</a-option>
                  <a-option>Guangzhou</a-option>
                  <a-option>Shenzhen</a-option>
                  <a-option>Chengdu</a-option>
                  <a-option>Wuhan</a-option>
                </a-select>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value3"
                  label="选择课程"

                  :rules="[{
                      required: true,
                      message: '请您选择关联课程',
                    },
                  ]"
              >
                <a-select
                    v-model="formData.value3"
                    placeholder="请您选择关联课程"
                    multiple
                >
                  <a-option>Beijing</a-option>
                  <a-option>Shanghai</a-option>
                  <a-option>Guangzhou</a-option>
                  <a-option>Shenzhen</a-option>
                  <a-option>Chengdu</a-option>
                  <a-option>Wuhan</a-option>
                </a-select>

              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value4"
                  label="是否考试"
                  :rules="[{
                      required: true,
                      message: '请您选择是否考试',
                    },
                  ]"
              >
                <a-radio-group v-model="formData.value4">
                  <a-radio value="A">是</a-radio>
                  <a-radio value="B">否</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >

            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value5"
                  label="选择试卷"
                  :rules="[{
                      required: true,
                      message: '请您选择试卷',
                    },
                ]"
              >
                <a-select
                    v-model="formData.value5"
                    placeholder="请您选择关联试卷"

                >
                  <a-option>Beijing</a-option>
                  <a-option>Shanghai</a-option>
                  <a-option>Guangzhou</a-option>
                  <a-option>Shenzhen</a-option>
                  <a-option>Chengdu</a-option>
                  <a-option>Wuhan</a-option>
                </a-select>

              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value6"
                  label="允许重考次数"
                  :rules="[{
                      required: true,
                      message: '请您选择允许重考次数',
                    },
                ]"
              >
                <a-select
                    v-model="formData.value6"
                    placeholder="请您选择允许重考次数"

                >
                  <a-option>Beijing</a-option>
                  <a-option>Shanghai</a-option>
                  <a-option>Guangzhou</a-option>
                  <a-option>Shenzhen</a-option>
                  <a-option>Chengdu</a-option>
                  <a-option>Wuhan</a-option>
                </a-select>
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
                  label="企业"
                  :rules="[
                    {
                      required: true,
                      message: '请输入您的企业名称',
                    },
                ]"
              >
                <a-input  v-model="formData.value7" placeholder="请输入您的企业名称" />
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value8"
                  label="选择部门"
                  :rules="[{
                      required: true,
                      message: '请您选择参与培训的部门',
                    },
                  ]"
              >
                <a-select
                    v-model="formData.value8"
                    placeholder="请您选择参与培训的部门"
                >
                  <a-option>Beijing</a-option>
                  <a-option>Shanghai</a-option>
                  <a-option>Guangzhou</a-option>
                  <a-option>Shenzhen</a-option>
                  <a-option>Chengdu</a-option>
                  <a-option>Wuhan</a-option>
                </a-select>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value9"
                  label="人员类型"
                  :rules="[{
                      required: true,
                      message: '请您选择是否考试',
                    },
                  ]"
              >
                <a-radio-group v-model="formData.value9">
                  <a-radio value="A">全部</a-radio>
                  <a-radio value="B">内部员工</a-radio>
                  <a-radio value="B">外部员工</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>

          </a-row>

          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value10"
                  label="培训时间"
                  :rules="[{
                      required: true,
                      message: '请添加培训时间',
                    },
                ]"
              >
                <a-range-picker v-model="formData.value10" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row  class="button-right" justify="end" style="margin-top: 25px;">
              <a-form-item>
                <a-space>
                  <a-button @click="onCancelClick">取消</a-button>
                  <a-button type="primary" html-type="submit" @click="onPreserveClick">保存</a-button>
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
    value7: '',
    value8: '',
    value9: '',
    value10: '',
  });

  const onPreserveClick = () => {
    console.log(formData.value)
  }

  const onCancelClick = ()=>{
    Object.keys(formData.value).forEach((key,index) => {
      console.log(formData.value[key]);
      formData.value[key] = ''
    })

  }
</script>

<style scoped lang="less">
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

