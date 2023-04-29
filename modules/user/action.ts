import { IUser } from "../../utils/interface";
import { UserActionEnum } from "./interface";

export const addUser = (payload: IUser[]) => {
  return {
    payload,
    type: UserActionEnum.ADD_USER,
  };
};
