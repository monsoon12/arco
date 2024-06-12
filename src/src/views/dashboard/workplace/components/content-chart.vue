<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: 0 }"
      :body-style="{
        paddingTop: '20px',
        overflowX:'hidden',

      }"
      title="数据 （最近七日）"
    >

      <Chart height="300px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { reactive, ref,defineExpose  } from 'vue';
  import { graphic } from 'echarts';

  import useLoading from '@/hooks/loading';
  import { queryContentData, ContentDataRecord } from '@/api/dashboard';
  import useChartOption from '@/hooks/chart-option';
  import { ToolTipFormatterParams } from '@/types/echarts';
  import { AnyObject } from '@/types/global';

  function graphicFactory(side: AnyObject) {
    return {
      type: 'text',
      bottom: '8',
      ...side,
      style: {
        text: '',
        textAlign: 'center',
        fill: '#4E5969',
        fontSize: 12,
      },
    };
  }
  const { loading, setLoading } = useLoading(true);
  const xAxis = ref<string[]>([]);
  const chartsData = ref<number[]>([]);
  const graphicElements = ref([
    graphicFactory({ left: '2.6%' }),
    graphicFactory({ right: 0 }),
  ]);

  const props = defineProps<{
    oInterval:string|number,
  }>()
  const { chartOption } = useChartOption(() => {
    return {
      grid: {
        left: '2.6%',
        right: '0',
        top: '10',
        bottom: '30',
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: xAxis.value,
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          interval:props.oInterval,
          formatter(value: number, idx: number) {
            if (idx === 0) return '';
            if (idx === xAxis.value.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        splitLine: {
          show: true,
          interval: (idx: number) => {
            if (idx === 0) return false;
            if (idx === xAxis.value.length - 1) return false;
            return true;
          },
          lineStyle: {
            color: '#E5E8EF',
          },
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#23ADFF',
            width: 2,
          },
        },



      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisLabel: {
          formatter(value: any, idx: number) {
            if (idx === 0) return value;
            return `${value}`;
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#E5E8EF',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        confine: true,
        formatter(params) {
          const [firstElement] = params as ToolTipFormatterParams[];

          return `<div style="padding: 10px;">
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            <div style="padding: 5px 0;font-size: 12px;color: #333335;"><span>今日在线人数：</span><span>66</span></div>
            <div style="padding: 5px 0;font-size: 12px;color: #333335;"><span>今日学习人数：</span><span>150056</span></div>
            <div style="padding: 5px 0;font-size: 12px;color: #333335;"><span>今日学习时长：</span><span>5</span></div>
            <div style="padding: 5px 0;font-size: 12px;color: #333335;"><span>今日课程完成人数：</span><span>522346</span></div>
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      graphic: {
        elements: graphicElements.value,
      },
      series: [
        {
          data: chartsData.value,
          type: 'line',
          smooth: true,
          // symbol: 'circle',
          symbolSize: 12,
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
            },
          },
          lineStyle: {
            width: 3,
            color: new graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(30, 231, 255, 1)',
              },
              {
                offset: 0.5,
                color: 'rgba(36, 154, 255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(111, 66, 251, 1)',
              },
            ]),
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(17, 126, 255, 0.16)',
              },
              {
                offset: 1,
                color: 'rgba(17, 128, 255, 0)',
              },
            ]),
          },
        },
      ],
    };
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      // const { data: chartData } = await queryContentData();
      // console.log(chartData)
      const chartData =  [
        {
          "x": "2024-05-24",
          "y": 58
        },
        {
          "x": "2024-05-25",
          "y": 81
        },
        {
          "x": "2024-05-26",
          "y": 53
        },
        {
          "x": "2024-05-27",
          "y": 90
        },
        {
          "x": "2024-05-28",
          "y": 64
        },
        {
          "x": "2024-05-29",
          "y": 88
        },
        {
          "x": "2024-05-30",
          "y": 49
        },
        {
          "x": "2024-05-31",
          "y": 79
        }
      ]
      chartData.forEach((el: ContentDataRecord, idx: number) => {
        xAxis.value.push(el.x);
        chartsData.value.push(el.y);
        if (idx === 0) {
          graphicElements.value[0].style.text = el.x;
        }
        if (idx === chartData.length - 1) {
          graphicElements.value[1].style.text = el.x;
        }
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();

</script>

<style scoped lang="less"></style>
