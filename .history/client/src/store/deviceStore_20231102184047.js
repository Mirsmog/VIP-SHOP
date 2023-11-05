import { makeAutoObservable } from 'mobx';
export default class deviceStore {
  constructor() {
    this._brands = [
      {}
    ];
    this._types = [];
    this._devices = [];
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
