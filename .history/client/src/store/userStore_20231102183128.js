import { makeAutoObservable } from 'mobx';
export default class userStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
  }
}
