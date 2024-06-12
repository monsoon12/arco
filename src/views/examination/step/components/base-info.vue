<template>
  <div class="add-step">
    <a-form
        ref="formRef"
        :model="formData"
        :label-col-props="{ xxl:6,xl:7,lg:8,md:9,sm:7,xs:7 }"
        :wrapper-col-props="{ xxl: 15,xl:16,lg:14,md:14,sm:17,xs:17 }"
    >
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
        <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <a-form-item
              class="form-item"
              field="value1"
              label="试卷名称"
              :rules="[
                    {
                      required: true,
                      message: '请输入试卷名称',
                    },
                ]"
          >
            <a-input  v-model="formData.value1" placeholder="请输入试卷名称" />
          </a-form-item>
        </a-col>
        <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
          <a-form-item
              v-model="formData.value2"
              class="form-item"
              field="value2"
              label="关联课程"
              :rules="[{
                    required: true,
                    message: '请选择关联课程',
                  },
              ]"
          >
            <a-cascader
                v-model="formData.value2"
                expand-trigger="hover"
                placeholder="请选择关联课程"
                :options="options"
            />

          </a-form-item>
        </a-col>

      </a-row>
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap>
        <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24" :xs="24">
          <a-form-item
              class="form-item"
              field="value3"
              label="创建时间"
          >
            <a-date-picker v-model="formData.value3" placeholder="请选择创建时间"/>
          </a-form-item>
        </a-col>
        <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
          <a-form-item
              class="form-item"
              field="value4"
              label="创建人"
          >
            <a-input v-model="formData.value4" placeholder="请输入创建人" />
          </a-form-item>
        </a-col>

      </a-row>
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
        <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <a-form-item
              class="form-item"
              field="value5"
              label="及格分数线"
              :rules="[{
                      required: true,
                      message: '请输入及格分数线',
                    },
                ]"
          >
            <a-input  v-model="formData.value5" placeholder="请输入及格分数线" />
          </a-form-item>
        </a-col>
        <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
          <a-form-item
              class="form-item"
              field="value6"
              label="发布状态"
              :rules="[{
                      required: true,
                      message: '请选择发布状态',
                    },
                ]"
          >
            <a-radio-group v-model="formData.value6">
              <a-radio value="A">上架</a-radio>
              <a-radio value="B">禁用</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
        <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <a-form-item
              class="form-item"
              field="value8"
              label="考试时间"
              :rules="[{
                      required: true,
                      message: '请输入考试时间',
                    },
                ]"
          >
            <a-input  v-model="formData.value8" placeholder="请输入考试时间" />
          </a-form-item>
        </a-col>

      </a-row>
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}">
        <a-col  :xxl="12" :xl="12" :lg="12"  :md="15" :sm="24" :xs="24">
          <a-form-item
              field="artificial"
              label="试卷生成方式"

              :rules="[ {
                      required: true,
                      message: '请选择发布状态',
                    },
                ]"
          >
            <a-radio-group v-model="formData.artificial">
              <a-radio value="A">AI生成</a-radio>
              <a-radio value="B">手动导入</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="{ xxl:24,xl:18,lg:16 ,md: 16, sm: 24,xs: 24}" justify="end" style="margin-top: 25px;">
        <a-space>
          <a-form-item>
            <a-button type="primary" @click="onNextClick">
              {{ $t('stepForm.button.next') }}
            </a-button>
          </a-form-item>
        </a-space>
      </a-row>
    </a-form>
  </div>

</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick, } from 'vue';
import { FormInstance } from '@arco-design/web-vue/es/form';
import {BaseInfoModel} from "@/api/form";

const emits = defineEmits(['changeStep']);
const formRef = ref<FormInstance>();
const formData = ref<BaseInfoModel>({
    activityName: '',
    channelType: '',
    promotionTime: '',
    promoteLink: '',
    SelectionMethod: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    artificial:'',
});
const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
const onNextClick = async () => {
  const res = await formRef.value?.validate();
  if (!res) {
    emits('changeStep', 'forward', { ...formData.value });
  }
};
</script>

<style scoped lang="less">
.add-step{
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto;
}
</style>
