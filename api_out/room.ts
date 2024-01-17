/* eslint-disable */
/** @format */

// This is code generated automatically by the proto2api, please do not modify

import { webapi } from '~/utils/api';
import { Room2 } from './room2';

export interface GetReq {
  id: string;
}

export interface GetResp {
  room: Room1;
}

export interface Room1 {
  test22: Room2;
}

// null
// RoomService

export function Get(req: Partial<GetReq>, config?) {
  return webapi.post<GetResp>('/RoomService/Get', req, config);
}
