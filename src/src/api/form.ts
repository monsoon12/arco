import axios from 'axios';

export interface BaseInfoModel {
  activityName: string;
  channelType: string;
  promotionTime: any;
  promoteLink: string;
  SelectionMethod: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
  artificial:string;
}
export interface ChannelInfoModel {
  advertisingSource: string;
  advertisingMedia: string;
  keyword: string[];
  pushNotify: boolean;
  advertisingContent: string;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
}

export type UnitChannelModel = BaseInfoModel & ChannelInfoModel;

export function submitChannelForm(data: UnitChannelModel) {
  return axios.post('/api/channel-form/submit', { data });
}

export class BaseInfoModel2 {
}
