import { IUser } from "../../utils/interface";

export enum UserActionEnum {
  ADD_USER,
}

export interface IUserModuleAction {
  payload: IUser[];
  type: UserActionEnum;
}
