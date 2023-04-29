import { IEvent } from "../../utils/interface";
import { EventAction, EventActionEnum } from "./interface";

export default (state: IEvent[], action: EventAction) => {
  switch (action.type) {
    case EventActionEnum.ADD_EVENT:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
