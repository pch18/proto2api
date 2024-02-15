/** @format */

// This is code generated automatically by the proto2api, please do not modify

import { webapi } from '~/utils/api';
import { Remark, Rppppp } from './type';

export interface ListRemarkReq {
  //  @Entity
  entity: Remark.Entity;
  //  @Child
  child: Remark.Child;
  rpp: Rppppp;
}

export interface ListRemarkResp {
  remarks: Remark[];
}

// null
// CommonService

export function ListRemarkPreview(req: Partial<ListRemarkReq>, config?: any) {
  return webapi.post<ListRemarkResp>(
    '/CommonService/ListRemarkPreview',
    req,
    config
  );
}
