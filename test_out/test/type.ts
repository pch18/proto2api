/* eslint-disable */
/** @format */

// This is code generated automatically by the proto2api, please do not modify

// This the module of Remark
export namespace Remark {
  export enum Entity {
    // "orderId"   / ""
    Order = 'Order',
    // "roomId"    / ""
    Room = 'Room',
    // "roomId"    / "date"
    RoomDay = 'RoomDay',
    // "billId"    / ""
    Bill = 'Bill',
    // "missionId" / "0发单者/1接单者"
    Mission = 'Mission',
    Notice = 'Notice',
  }

  export interface Child {
    //  @uint64
    test: string;
  }
}
export interface Remark {
  id: string;
  entity: Remark.Entity;
  child: Remark.Child;
}
