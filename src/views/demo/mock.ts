import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {

    Mock.mock(new RegExp('/api/homeList'), () => {
      return successResponseWrap({
        username: 'hhhh',
        password: '5123641',
      });
    });
  },
});
