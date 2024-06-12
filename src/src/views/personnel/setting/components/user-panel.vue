<template>
  <a-card :bordered="false">
    <a-form
        :model="formData"
        auto-label-width
    >
      <a-row :gutter="24" wrap>
        <a-col :span="4"  >
          <a-upload
              :custom-request="customRequest"
              list-type="picture-card"
              :file-list="fileList"
              :show-upload-button="true"
              :show-file-list="false"
              @change="uploadChange"
          >
            <template #upload-button>
              <a-avatar :size="100" class="info-avatar">
                <template #trigger-icon>
                  <icon-camera />
                </template>
                <img v-if="fileList.length" :src="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'" />
              </a-avatar>
            </template>
          </a-upload>
        </a-col>

        <a-col :span="20"  style="display:flex;flex-wrap: wrap;">
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="姓名："
            >
              小明
            </a-form-item>
          </a-col>
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="电话："
            >
              中国移动杭州分公司
            </a-form-item>
          </a-col>
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="企业："
            >
              12345668545
            </a-form-item>
          </a-col>
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="部门："
            >
              网络安全部、总裁办
            </a-form-item>
          </a-col>
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="注册时间："
            >
              1990-01-22 23:57:06
            </a-form-item>
          </a-col>
          <a-col :xxl="10" :xl="10" :lg="12" :md="12" :sm="24" :xs="24">
            <a-form-item
                field="value3"
                label="职位："
            >

              前端开发
            </a-form-item>
          </a-col>
        </a-col>

      </a-row>
      <a-row :gutter="15" >

      </a-row>
    </a-form>

  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type {
    FileItem,
    RequestOption,
  } from '@arco-design/web-vue/es/upload/interfaces';
  import { useUserStore } from '@/store';
  import { userUploadApi } from '@/api/user-center';
  import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

  const userStore = useUserStore();
  const file = {
    uid: '-2',
    name: 'avatar.png',
    url: userStore.avatar,
  };
  const renderData = [
    {
      label: '姓名',
      value: userStore.name,
    },
    {
      label: '企业',
      value: userStore.certification,
    },
    {
      label: '电话',
      value: userStore.accountId,
    },
    {
      label: '部门',
      value: userStore.phone,
    },
    {
      label: '注册时间',
      value: userStore.registrationDate,
    },
    {
      label: '职位',
      value: '前端开发',
    },
  ] as DescData[];
  const fileList = ref<FileItem[]>([file]);
  const uploadChange = (fileItemList: FileItem[], fileItem: FileItem) => {
    fileList.value = [fileItem];
  };
  const customRequest = (options: RequestOption) => {
    // docs: https://axios-http.com/docs/cancellation
    const controller = new AbortController();

    (async function requestWrap() {
      const {
        onProgress,
        onError,
        onSuccess,
        fileItem,
        name = 'file',
      } = options;
      onProgress(20);
      const formData = new FormData();
      formData.append(name as string, fileItem.file as Blob);
      const onUploadProgress = (event: ProgressEvent) => {
        let percent;
        if (event.total > 0) {
          percent = (event.loaded / event.total) * 100;
        }
        onProgress(parseInt(String(percent), 10), event);
      };

      try {
        // https://github.com/axios/axios/issues/1630
        // https://github.com/nuysoft/Mock/issues/127

        const res = await userUploadApi(formData, {
          controller,
          onUploadProgress,
        });
        onSuccess(res);
      } catch (error) {
        onError(error);
      }
    })();
    return {
      abort() {
        controller.abort();
      },
    };
  };
</script>

<style scoped lang="less">
  .arco-card {
    padding: 14px 0 4px 4px;
    border-radius: 4px;
  }
  .descriptions-all{
    tr{
      margin-top: 15px;
    }
  }
  :deep(.arco-avatar-trigger-icon-button) {
    width: 32px;
    height: 32px;
    line-height: 32px;
    background-color: #e8f3ff;
    .arco-icon-camera {
      margin-top: 8px;
      color: rgb(var(--arcoblue-6));
      font-size: 14px;
    }
  }
</style>
