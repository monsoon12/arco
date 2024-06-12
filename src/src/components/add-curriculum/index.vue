
<template>
  <div >
<!--    <a-button @click="handleClick">Open Form Modal</a-button>-->

    <a-modal class="add-curriculum"  v-model:visible="visible" title="添加课程" @cancel="handleCancel" @before-ok="handleBeforeOk">
      <a-form ref="formDom" :model="form"  auto-label-width :rules="rules" @submit-success="submitSuccess" v-if="isUpload">
        <a-form-item field="name" label="课程名称" >
          <a-input v-model="form.name" placeholder="输入课程名称" max-length="100" />
        </a-form-item>
        <a-form-item field="post" label="课程分类" >
          <a-select v-model="form.post" placeholder="选择分类">
            <a-option value="post1">Post1</a-option>
            <a-option value="post2">Post2</a-option>
            <a-option value="post3">Post3</a-option>
            <a-option value="post4">Post4</a-option>
          </a-select>
        </a-form-item>
        <a-form-item field="file" label="课程文档" >
          <a-space direction="vertical" :style="{ width: '100%' }">
            <a-upload :custom-request="customRequest"   :limit="1" />
          </a-space>
        </a-form-item>
        <a-form-item field="time" label="阅读时间" >
          <a-input v-model="form.time"  placeholder="可选范围1~120分钟" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
  import * as XLSX from 'xlsx';
  import { Message } from '@arco-design/web-vue';
  import { reactive, ref,defineExpose  } from 'vue';

  const visible = ref(false);
  const formDom = ref()
  const form = reactive({
    name: '',
    post: '',
    file: '',
    time:'',
    chapter:''
  });
  const isUpload = ref(true);
  // 清除数据，重新刷新DOM
  const cleanFormSuccess = ()=>{
    Object.keys(form).forEach((el)=>{
      form[el] = ""
    })
    isUpload.value = false;
    setTimeout(function () {
      isUpload.value = true;
    },500)
  }
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
  const handleClick = () => {
    visible.value = true;
  };
  const submitSuccess = () =>{

    Message.success('添加成功')
  }
  const handleBeforeOk = (done) => {
    formDom.value.handleSubmit()

    window.setTimeout(() => {
      done()
      cleanFormSuccess()
      // prevent close
      // done(false)
    }, 3000)
  };

  const handleCancel = () => {
    visible.value = false;

    cleanFormSuccess()
  }


  const customRequest = (option) => {
    const {onProgress, onError, onSuccess, fileItem, name} = option
    const item = fileItem.file;
    const reader = new FileReader();
    form.file = item
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames;

      Object.keys(firstSheetName).forEach(sheetName => {
        sheetName = firstSheetName[sheetName]
        const worksheet = workbook.Sheets[sheetName]
        const rowObject = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // if (rowObject.length !== 0){
        //   console.log(rowObject)
        //   form.file = rowObject
        // }
        // 这里可以处理解析到的数据，例如保存到数据库等
      });
    };
    reader.readAsArrayBuffer(item);
  };
  // 暴露方法给父组件
  defineExpose({
    handleClick
  })
</script>
