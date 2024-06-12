<template>
  <a-form
    ref="formRef"
    :model="formData"
    :label-col-props="{ xxl:3,xl:6,lg:7,md:7,sm:6,xs:7 }"
    :wrapper-col-props="{ xxl: 18,xl:17,lg:16,md:15,sm:15,xs:15 }"
  >
    <a-row  wrap>
      <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value1"
            :label="$t('userSetting.basicInfo.form.label.email')"
        >
          <a-upload
              list-type="picture-card"
              :show-upload-button="true"
              :show-file-list="false"
              class="avatar-wrap"
          >
            <template #upload-button>
              <a-avatar :size="65" class="info-avatar">
                <template #trigger-icon>
                  <icon-camera />
                </template>
                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"  alt=""/>
              </a-avatar>
            </template>
          </a-upload>
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value2"
            :label="'状态'"
            :rules="[
        {
          required: true,
          message: '请选择状态',
        },
      ]"
        >
          <a-radio-group v-model="formData.value2">
            <a-radio value="A">启用</a-radio>
            <a-radio value="B">禁用</a-radio>

          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value3"
            :label="'姓名'"
            :rules="[
            {
              required: true,
              message: '请输入您的姓名',
            },
      ]"
        >
          <a-input
              v-model="formData.value3"
              :placeholder="'请输入您的姓名'"
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value4"
            :label="'电话'"
            :rules="[{
              required: true,
              message: '请输入您的电话号码',
            },]"
        >
          <a-input
              v-model="formData.value4"
              :placeholder="'请输入您的电话号码'"
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="address"
            :label="'邮箱'"
        >
          <a-input
              v-model="formData.address"
              :placeholder="'请输入您的邮箱'"
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="address"
            :label="'密码'"
            :rules="[{
              required: true,
              message: '请输入您的密码',
            },]"
        >
          <a-input-password
              v-model="formData.value5"
              :placeholder="'请输入您的密码'"
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value13"
            :label="'公司'"
            :rules="[{
              required: true,
              message: '请输入您的公司',
            },]"
        >
          <a-input
              v-model="formData.value13"
              :placeholder="'请输入您的公司'"
          />
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value6"
            :label="'人员类型'"
            :rules="[ {
              required: true,
              message: '请选择人员类型',
            },]"
        >
          <a-radio-group v-model="formData.value6">
            <a-radio value="A">内部员工</a-radio>
            <a-radio value="B">外部员工</a-radio>

          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value7"
            :label="'部门'"
            :rules="[ {
              required: true,
              message: '请选择部门',
            },]"
        >
          <a-select
              v-model="formData.value7"
              placeholder="请选择部门"
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
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value8"
            :label="'职位'"
            :rules="[{
              required: true,
              message: '请输入您的职位',
            },]"
        >
          <a-input
              v-model="formData.value8"
              :placeholder="'请输入您的职位'"
          />
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value9"
            :label="'国家/地区'"
            :rules="[{
              required: true,
              message: '请选择国家/地区',
            },]"
        >
          <a-cascader
              v-model="formData.value9"
              :placeholder="'请选择国家/地区'"
              :options="[
              {
                label: '北京',
                value: 'beijing',
                children: [
                  {
                    label: '北京',
                    value: 'beijing',
                    children: [
                      {
                        label: '朝阳',
                        value: 'chaoyang',
                      },
                    ],
                  },
                ],
              },
            ]"
              allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col  :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value10"
            :label="$t('userSetting.basicInfo.form.label.area')"
            :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.area.required'),
        },
      ]"
        >
          <a-cascader
              v-model="formData.value10"
              :placeholder="$t('userSetting.basicInfo.placeholder.area')"
              :options="[
          {
            label: '北京',
            value: 'beijing',
            children: [
              {
                label: '北京',
                value: 'beijing',
                children: [
                  {
                    label: '朝阳',
                    value: 'chaoyang',
                  },
                ],
              },
            ],
          },
        ]"
              allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value11"
            :label="'具体地址'"
        >
          <a-input
              v-model="formData.value11"
              :placeholder="'请输入您的地址'"
          />
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
      </a-col>
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
        <a-form-item
            field="value12"
            :label="'权限类型'"
            :rules="[{
              required: true,
              message: '请选择您的权限类型',
            },]"
        >
          <a-radio-group v-model="formData.value12">
            <a-radio value="A">企业管理员</a-radio>
            <a-radio value="B">部门管理员</a-radio>
            <a-radio value="C">普通员工</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">
      </a-col>

    </a-row>
    <a-row >
      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24">

      </a-col>


      <a-col :xxl="12" :xl="12"  :lg="12" :md="12" :sm="24" :xs="24" class="button-all-right">
        <a-form-item>
          <a-space>
            <a-button  type="secondary" @click="reset">
              {{ $t('userSetting.reset') }}
            </a-button>
            <a-button  type="primary" @click="validate">
              {{ $t('userSetting.save') }}
            </a-button>
          </a-space>
        </a-form-item>
      </a-col>
    </a-row>






  </a-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BasicInfoModel } from '@/api/user-center';

  const formRef = ref<FormInstance>();
  const formData = ref<BasicInfoModel>({
    email: '',
    nickname: '',
    countryRegion: '',
    area: '',
    address: '',
    profile: '',
  });
  const validate = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      // do some thing
      // you also can use html-type to submit
    }
  };
  const reset = async () => {
    await formRef.value?.resetFields();
  };
</script>

<style scoped lang="less">
  .form {
    width: 540px;
    margin: 0 auto;
  }
  .arco-radio-group{
    white-space:nowrap;
  }
  :deep(.arco-avatar-trigger-icon-button) {
    width: 25px;
    height: 25px;
    line-height: 25px;
    background-color: #e8f3ff;
    .arco-icon-camera {
      margin-top: 5px;
      color: rgb(var(--arcoblue-6));
      font-size: 14px;
    }
  }
</style>
