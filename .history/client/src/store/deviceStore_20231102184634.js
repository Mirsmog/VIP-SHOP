import { makeAutoObservable } from 'mobx';
export default class deviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'phones' },
      { id: 2, name: 'laptops' },
    ];
    this._brands = [
      { id: 1, name: 'xiaomi' },
      { id: 2, name: 'lenovo' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 2,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 3,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 4,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
    ];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
