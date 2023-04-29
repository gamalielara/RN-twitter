import { IEventDetail } from "../../utils/interface";

export enum EventActionEnum {
  ADD_EVENT,
}

export interface EventAction {
  payload: IEventDetail[];
  type: EventActionEnum;
}
