import { makeAutoObservable } from 'mobx';
export default class deviceStore {
  constructor() {
    this._types = [];
    this._brands = [
      { id: 1, name: 'Xiaomi' },
      { id: 2, name: 'Lenovo' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Samsung' },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

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
      {
        id: 5,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 6,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 7,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
      {
        id: 8,
        name: 'iphone 12 max pro',
        price: 98000,
        rating: 5,
        img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
      },
    ];
    makeAutoObservable(this);
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
