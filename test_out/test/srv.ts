/** @format */

// This is code generated automatically by the proto2api, please do not modify

import { webapi } from '~/utils/api';
import { OtterMsg } from './otter_pkg';
import { Srv2 } from './srv2';
export namespace BillService {
  export function Create(req: MainMsg, config?: any) {
    return webapi.post<MainMsg>('/BillService/Create', req, config);
  }

  export function CreateByRoomIds(req: MainMsg, config?: any) {
    return webapi.post<MainMsg>('/BillService/CreateByRoomIds', req, config);
  }

  export function BatchDel(req: MainMsg, config?: any) {
    return webapi.post<MainMsg>('/BillService/BatchDel', req, config);
  }

  export function BatchDelByShareId(req: MainMsg, config?: any) {
    return webapi.post<MainMsg>('/BillService/BatchDelByShareId', req, config);
  }

  export function Update(req: MainMsg, config?: any) {
    return webapi.post<MainMsg>('/BillService/Update', req, config);
  }
}
export interface MainMsg {
  field_otterMsg: OtterMsg;
  field_srv2: Srv2;
}
export enum Kind {
  // 房费差额
  RoomDiff = 0,
  // 短租房费
  ShortRental = 1,
  // 长租房费
  LongRental = 2,
  // 水
  Water = 3,
  // 电
  Electricity = 4,
  // 煤
  Gas = 5,
  // 网
  Network = 6,
  // 杂费
  Extra = 7,
  // 押金
  Deposit = 8,
  // 房东出账
  Landlord = 101,
  // 管理费出账
  Management = 102,
}
