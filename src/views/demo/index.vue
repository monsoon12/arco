<template>
  <div>
<!--    Excel-->
    <div>
      <input multiple type="file"  @change="handleFileUpload" />
      <div v-if="excelData">
        <table>
          <tr v-for="(row, rowIndex) in excelData" :key="`row-${rowIndex}`">
            <td v-for="(cell, cellIndex) in row" :key="`cell-${cellIndex}`">{{ cell }}</td>
          </tr>
        </table>
      </div>
      <div class="">
        <br><br><br><br>
        <button @click="exportToExcel">导出</button>
      </div>
    </div>
<!--    word-->
<!--    <div>-->
<!--      word：<input type="file" @change="handleFileUpload2" multiple>-->
<!--    </div>-->
<!--    <div ref="divDom">1</div>-->
  </div>
</template>

<script  setup>
import {ref} from 'vue';

import {renderAsync} from 'docx-preview'
// import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs"
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';

// import { Office } from 'office-js';
const excelData = ref(null);
function handleFileUpload(event) {
  const oFile = event.target.files;
  const arrayFile = Object.keys(oFile)

  arrayFile.forEach((key) => {
      const item = oFile[key];
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames;

        Object.keys(firstSheetName).forEach(sheetName => {

          sheetName = firstSheetName[sheetName]
          const worksheet = workbook.Sheets[sheetName]

          const rowObject = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          console.log(rowObject)

          // 这里可以处理解析到的数据，例如保存到数据库等
        });
      };
      reader.readAsArrayBuffer(item);
  })
}
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

// word
const divDom = ref(null);
const handleFileUpload2 = (event) =>{
  const oFile = event.target.files[0];
  console.log(oFile)
  renderAsync(oFile, divDom.value)
}

// PDF
const pdfText = ref("")

// 上传pdf

// //读取pdf文件里的文字
// const extractTextFromPDF = (data) => {
//   // PDFJS.getDocument(data)
//   PDFJS.getDocument(data).promise.then((pdf) => {
//     let textContent = "";
//     for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
//       pdf
//           .getPage(pageNumber)
//           .then((page) => {
//             return page.getTextContent();
//           })
//           .then((content) => {
//             content.items.forEach((item) => {
//               textContent += item.str;
//             });
//             textContent = textContent + "\n";
//             if (pageNumber === pdf.numPages) {
//               const test = {
//                 content: textContent,
//                 aiapi: FormAllData.value.aiapi,
//                 model: FormAllData.value.model,
//               };
//               //最终获取的数据
//               console.log(test);
//             }
//           });
//     }
//   });
// };


const  readPDF = (event)=>{
    // const file = event.target.files[0];
    // try {
    //   const loadingTask = getDocument(file);
    //   const pdf = loadingTask.promise;
    //   const page = pdf.getPage(1); // 获取第一页
    //
    //   const textContent =  page.getTextContent();
    //   pdfText.value = textContent.items.map(item => item.str).join('');
    // } catch (error) {
    //   console.error('Error loading PDF: ', error);
    // }
  //   if (!file) {
  //     return;
  //   }
  //
  //   const pdf =  PDFJS.getDocument(file).promise;
  //   let text = '';
  //
  //   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
  //     const page =  pdf.getPage(pageNum);
  //     const textContent =  page.getTextContent();
  //     text += textContent.items.map(item => item.str).join('');
  //   }
  //
  // pdfText.value = text;
}
</script>
