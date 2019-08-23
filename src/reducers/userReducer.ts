import { Reducer } from "redux";

export interface IUserState {}

const INIT_STATE: IUserState = {};

const reducer: Reducer<IUserState> = (state = INIT_STATE, action) => {
  return state;
};

export default reducer;
