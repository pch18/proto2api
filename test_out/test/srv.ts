/* eslint-disable */
/** @format */

// This is code generated automatically by the proto2api, please do not modify

import { webapi } from '~/utils/api';
import { Remark } from './type';

export interface ListRemarkReq {
  //  @Entity
  entity: Remark.Entity;
  //  @Child
  child: Remark.Child;
}

export interface ListRemarkResp {
  remarks: Remark[];
}

// null
// CommonService

export function ListRemarkPreview(req: Partial<ListRemarkReq>, config?) {
  return webapi.post<ListRemarkResp>(
    '/CommonService/ListRemarkPreview',
    req,
    config
  );
}
