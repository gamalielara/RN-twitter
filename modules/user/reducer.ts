import { IUser } from "../../utils/interface";
import { IUserModuleAction, UserActionEnum } from "./interface";

export default (state: IUser[], action: IUserModuleAction): IUser[] => {
  switch (action.type) {
    case UserActionEnum.ADD_USER:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
