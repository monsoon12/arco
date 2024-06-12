<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="'新增课程'">
      <div class="add-step">
        <a-form
            ref="formRef"
            :model="formData"
            auto-label-width

        >
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value1"
                  label="课程名称"
                  :rules="[
                    {
                      required: true,
                      message: '请输入课程名称',
                    },
                ]"
              >
                <a-input  v-model="formData.value1" placeholder="请输入课程名称" />
              </a-form-item>
            </a-col>
            <a-col :xxl="12" :xl="12" :lg="12"  :md="12" :sm="24"  :xs="24">
              <a-form-item
                  class="form-item"
                  field="value2"
                  label="课程分类"
                  :rules="[
                    {
                      required: true,
                      message: '请选择课程分类',
                    },
                ]"
              >
                <a-select
                    v-model="formData.value2"
                    placeholder="请选择课程分类"

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
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value5"
                  label="课程属性"
                  :rules="[{
                      required: true,
                      message: '请选择课程属性',
                    },
                ]"
              >
                <a-select
                    v-model="formData.value2"
                    placeholder="请选择课程属性"

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
          <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" wrap >
            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <a-form-item
                  class="form-item"
                  field="value8"
                  label="课程文档"
                  :rules="[{
                      required: true,
                      message: '请添加课程文档',
                    },
                ]"
              >
                <a-upload
                    tip="仅支持PDF、DOC和PPT格式。最大文件尺寸300MB。"
                    :disabled="disabled"
                    draggable
                    :custom-request="customRequest"
                    @before-upload="beforeUpload"
                    @before-remove="beforeRemove"
                />
              </a-form-item>
            </a-col>

          </a-row>
          <a-row style="margin-top: 25px;"  class="button-all-right">
              <a-form-item>
                <a-space >
                  <a-button @click="onCancelClick">取消</a-button>
                  <a-button type="primary" @click="onPreserveClick">保存</a-button>
                </a-space>
              </a-form-item>
          </a-row>
        </a-form>
      </div>
    </a-card>
  </div>
</template>


<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick, } from 'vue';
import {Message} from "@arco-design/web-vue";


const disabled = ref(false);
const formData = ref({
  value1: '',
  value2: '',
  value3: '',
  value4: '',
  value5: '',
  value6: '',
  value7: '',
  value8: '',
});
const customRequest = (option) => {
  const {onProgress, onError, onSuccess, fileItem, name} = option

};
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    const oFile = file;
    const oSize = (file.size / 1024 / 1024).toFixed(2) ;
    console.log(oSize,file)
    if (Number(oSize) <= 300){
      formData.value.value8 = oFile ;

      disabled.value = true
      resolve(true)
    }else {
      Message.warning('文件超过300MB');
    }

  });
};
const beforeRemove = (file) => {
  return new Promise((resolve, reject) => {
    disabled.value = false
    resolve(true)
  });
};
</script>

<style scoped lang="less">
.add-step{

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

</style>

