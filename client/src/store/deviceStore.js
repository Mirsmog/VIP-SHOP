import { makeAutoObservable } from 'mobx';
export default class deviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._devices = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 1;
    makeAutoObservable(this);
  }
  setSelectedType(type) {
    this._selectedType = type;
    this.setPage(1);
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
    this.setPage(1);
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
  setPage(page) {
    this._page = page;
  }
  setLimit(limit) {
    this._limit = limit;
  }
  setTotalCount(totalCount) {
    this._totalCount = totalCount;
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

  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
