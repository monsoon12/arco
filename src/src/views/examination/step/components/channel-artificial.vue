<template>
  <div class="add-step">
    <a-form
        ref="formRef"
        :model="formData"
        class="form"

        :wrapper-col-props="{ span: 10 }"
        auto-label-width
    >
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item
              class="upload-item"
              field="value1"
              label="添加试卷文件"
              :rules="[{
                  required: true,
                  message: '请上传试卷文件',
                },
            ]"
          >
            <a-upload
                :disabled="disabled"
                draggable
                tip="仅支持PDF、DOC和PPT格式。最大文件尺寸300MB。"
                :custom-request="customRequest"
                @before-upload="beforeUpload"
                @before-remove="beforeRemove"
                :default-file-list="[
                  {
                    uid: '-2',
                    name: 'light.png',
                    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
                  },

                ]"
            />
            <template #help>
              <p style="width:100%;text-align: right;"><a href="" style="color: rgb(var(--primary-6));">试卷模板下载</a></p>
            </template>
          </a-form-item>
        </a-col>

      </a-row>
      <a-row :gutter="24">
        <a-card class="general-card" style="width: 100%">
          <div class="preview-content">
            <a-spin :loading="loading" class="loading-width">
              <div class="preview-box">
                <div class="title">
                  <span class="left">题目预览</span>
                  <span class="right">
                    <a-button v-if="1===1" type="secondary">将下列题目添加到试卷</a-button>
                    <a-button v-else type="primary">将下列题目添加到试卷</a-button>
                  </span>
                </div>
                <div class="content-box">
                  <ul>
                    <li>
                      <div class="choice-wrap">
                        <div class="choice-text">单选题</div>
                        <div class="choice-content">
                          <p>1.中华人民共和国安全生产法（ ）</p>
                          <p>A、我国境内所有生产经营单位安全生产适用本法；</p>
                          <p>B、外方独资不适用于本法；</p>
                          <p>C、民营企业不适用本法；</p>
                          <p>D、以上都不对</p>
                          <p>答案：A</p>
                        </div>
                      </div>
                      <div class="choice-button">
                        <a-space>
                          <a-button type="primary">重新生成</a-button>
                          <a-button type="primary" @click="handleClick">编辑本题</a-button>
                          <a-button type="outline" status="danger">删除本题</a-button>
                        </a-space>
                      </div>
                    </li>
                    <li>
                      <div class="choice-wrap">
                        <div class="choice-text">单选题</div>
                        <div class="choice-content">
                          <p>1.中华人民共和国安全生产法（ ）</p>
                          <p>A、我国境内所有生产经营单位安全生产适用本法；</p>
                          <p>B、外方独资不适用于本法；</p>
                          <p>C、民营企业不适用本法；</p>
                          <p>D、以上都不对</p>
                          <p>答案：A</p>
                        </div>
                      </div>
                      <div class="choice-button">
                        <a-space>
                          <a-button type="primary">重新生成</a-button>
                          <a-button type="primary" @click="handleClick">编辑本题</a-button>
                          <a-button type="outline" status="danger">删除本题</a-button>
                        </a-space>
                      </div>
                    </li>
                    <li>
                      <div class="choice-wrap">
                        <div class="choice-text">单选题</div>
                        <div class="choice-content">
                          <p>1.中华人民共和国安全生产法（ ）</p>
                          <p>A、我国境内所有生产经营单位安全生产适用本法；</p>
                          <p>B、外方独资不适用于本法；</p>
                          <p>C、民营企业不适用本法；</p>
                          <p>D、以上都不对</p>
                          <p>答案：A</p>
                        </div>
                      </div>
                      <div class="choice-button">
                        <a-space>
                          <a-button type="primary">重新生成</a-button>
                          <a-button type="primary" @click="handleClick">编辑本题</a-button>
                          <a-button type="outline" status="danger">删除本题</a-button>
                        </a-space>
                      </div>
                    </li>
                    <li>
                      <div class="choice-wrap">
                        <div class="choice-text">单选题</div>
                        <div class="choice-content">
                          <p>1.中华人民共和国安全生产法（ ）</p>
                          <p>A、我国境内所有生产经营单位安全生产适用本法；</p>
                          <p>B、外方独资不适用于本法；</p>
                          <p>C、民营企业不适用本法；</p>
                          <p>D、以上都不对</p>
                          <p>答案：A</p>
                        </div>
                      </div>
                      <div class="choice-button">
                        <a-space>
                          <a-button type="primary">重新生成</a-button>
                          <a-button type="primary" @click="handleClick">编辑本题</a-button>
                          <a-button type="outline" status="danger">删除本题</a-button>
                        </a-space>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </a-spin>
          </div>
        </a-card>

      </a-row>
      <a-row :gutter="24" justify="end">
        <a-col>
          <a-form-item class="item-end"  >
            <span style="color: red;font-size: 16px;">上述题目总计20道，总分值20分</span>
          </a-form-item>

        </a-col>


      </a-row>
      <a-row :gutter="{ xxl:24,xl:24,lg:24 ,md: 24, sm: 24,xs: 24}" justify="center" >
        <a-col :xxl="24" :xl="24" :lg="24" :md="24">
          <a-form-item class="item-end"  >
            <a-space>
              <a-button type="secondary" @click="goPrev">
                {{ $t('stepForm.button.prev') }}
              </a-button>
              <a-button type="primary" @click="onNextClick">
                {{ $t('stepForm.button.next') }}
              </a-button>
            </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-modal class="modify" v-model:visible="visible"  title="编辑题目" @cancel="handleCancel" @before-ok="handleBeforeOk">
      <div class="choice-modify-text-wrap" ><span class="choice-modify-text">单选题</span></div>
      <a-form :model="formModify">
        <a-form-item
            class="modify-item"
            field="title"
            label="题干"
            :rules="[{
                  required: true,
                  message: '请输入题干',
                },
            ]"
        >
          <a-input v-model="formModify.title" />
          <template #help>
            <span style="color: #F59A23">请以（）表示题干中，需要让学员作答的区域</span>
          </template>
        </a-form-item>
        <a-form-item
            class="modify-item"
            field="a"
            label="选项A"
            :rules="[{
                  required: true,
                  message: '请输入选项A',
                },
            ]"
        >
          <a-input v-model="formModify.a" />
        </a-form-item>
        <a-form-item
            class="modify-item"
            field="b"
            label="选项B"
            :rules="[{
                  required: true,
                  message: '请输入选项B',
                },
            ]"
        >
          <a-input v-model="formModify.b" />
        </a-form-item>
        <a-form-item
            class="modify-item"
            field="c"
            label="选项C"
            :rules="[{
                  required: true,
                  message: '请输入选项C',
                },
            ]"
        >
          <a-input v-model="formModify.c" />
        </a-form-item>
        <a-form-item
            class="modify-item"
            field="d"
            label="选项D"
            :rules="[{
                  required: true,
                  message: '请输入选项D',
                },
            ]"
        >
          <a-input v-model="formModify.d" />
        </a-form-item>
        <a-form-item
            class="modify-item"
            field="answer"
            label="正确答案"
            :rules="[{
                  required: true,
                  message: '请输入正确答案',
                },
            ]"
        >
          <a-input v-model="formModify.answer" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

</template>

<script lang="ts" setup>
  import {computed, ref,reactive} from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { ChannelInfoModel } from '@/api/form';
  import type {SelectOptionData} from "@arco-design/web-vue/es/select/interface";
  import {Message} from "@arco-design/web-vue";

  const emits = defineEmits(['changeStep']);

  const formRef = ref<FormInstance>();
  const formData = ref<ChannelInfoModel>({
    advertisingSource: '',
    advertisingMedia: '',
    keyword: [],
    pushNotify: true,
    advertisingContent: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  });
  const disabled = ref(false);
  const loading = ref(false)
  const visible = ref(false);
  const formModify = reactive({
    title: '中华人民共和国安全生产法（）',
    a: '我国境内所有生产经营单位安全生产适用本法',
    b: '外方独资不适用于本法',
    c: '民营企业不适用本法',
    d: '以上都不对',
    answer: 'A',
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
        formData.value.value1 = oFile ;

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

  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
    console.log(formModify)
    window.setTimeout(() => {
      done()
      // prevent close
      // done(false)
    }, 3000)
  };
  const handleCancel = () => {
    visible.value = false;
  }




  const onNextClick = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      emits('changeStep', 'submit', { ...formData.value });
    }
  };
  const goPrev = () => {
    emits('changeStep', 'backward');
  };
</script>

<style scoped lang="less">

.modify-item{
  margin-bottom: 15px;
}
.choice-modify-text{
  padding: 2px 10px;
  border-radius: 20px;
  background-color: #65b3fb;
  color: #ffffff;
  font-size: 12px;
}
.preview-content{
  width: 100%;
  .preview-box{
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      .right{
        color: red;
      }
    }

    .content-box{
      background: #f2f3f5;

      height: 500px;
      margin-top: 25px;
      padding: 25px 0;
      ul{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0 25px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 7px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          opacity: 0.2;
          background: #c9cdd4;
        }
        &::-webkit-scrollbar-track {
          border-radius: 0;
          background: #eeeeee;
        }
        li{
          display: flex;
          justify-content: space-between;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 25px;
          -webkit-box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.34901960784313724);
          box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.34901960784313724);
          color: #7F7F7F;
          margin-bottom: 25px;

          //&:last-of-type{margin-bottom: 0;}
          .choice-wrap{
            display: flex;
            //max-width: 70%;
            width: 80%;
          }
          .choice-text{
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            border-radius: 20px;
            width: 60px;
            color: #ffffff;
            padding: 0 10px;
            height: 20px;
            background-color: #65b3fb;
            font-size: 12px;
            white-space:nowrap;
          }
          .choice-content{
            min-width: 250px;
            margin-left: 15px;
            p:first-of-type{margin-top: 2px;}
          }
          .choice-button{
            text-align: right;
            width: 20%;
            min-width: 280px;
          }
        }
      }
    }
  }
}
.add-step{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto;
}
  .container {
    .keep-margin {
      margin-bottom: 20px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    background-color: var(--color-bg-2);
  }

  .steps {
    margin-bottom: 36px;
  }
  .form-content {
    padding: 8px 50px 0 30px;
  }
  .edit-wrap{
    background: #f2f3f5;
    padding: 15px 0;
    width: 100%;
    height: 280px;
  }
  .edit{
    width: 100%;
    height: 100%;

    //border: 1px solid #ddd;
    padding: 0 15px;
    overflow-y: auto;
    p{margin: 0;}
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;

      opacity: 0.2;
      background: #c9cdd4;
    }
    &::-webkit-scrollbar-track {
      border-radius: 0;
      background: #eeeeee;
    }
    .text-checkbox{
      justify-content: start;
      align-items: start;
      width: 95%;
      margin-bottom: 10px;

      p{
        height: 20px;
        line-height: 13px;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        &.title{
          font-size: 14px;
          margin-bottom: 5px;
        }
        &.info{
          font-size: 12px;
          color: #999999;
          .info-text{
            display: inline-block;
            line-height: 20px;
            height: 100%;
            color: #ffffff;
            background-color: #65b3fb;
            padding: 0 10px;
            border-radius: 25px;
            margin-right: 5px;
          }
        }
      }
    }
    .arco-space,.arco-checkbox-group,.arco-space-item{
      display: block;
      width: 100%;
    }
  }

.edit-direction{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}
.loading-width{
  width: 100%;
  min-width: 170px;
}
.generate{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 35px;
    background: rgb(var(--primary-6));
    color: #ffffff;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
      background-color: rgb(var(--primary-5));
      border-color: transparent;
    }
  }
}

</style>
