import { IEventDetail } from "../../utils/interface";
import { EventActionEnum } from "./interface";

export const addEvent = (payload: IEventDetail[]) => {
  return {
    payload,
    type: EventActionEnum.ADD_EVENT,
  };
};
