import { makeAutoObservable } from "mobx";

export default class UserEducation {
  constructor() {
    this._isAuth = true;
    this._isStudent = true;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setIsStudent(bool) {
    this._isStudent = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }
  get IsStudent() {
    return this._isStudent;
  }
  get user() {
    return this._user;
  }
}
