import {axiosClassic} from "@/api/axios";

class UserService {
  _BASE_URL = '/users';

  async getUsers() {
    return await axiosClassic.get(this._BASE_URL)
  }

  async getUserInfo(id) {
    return await axiosClassic.get(`${this._BASE_URL}/${id}`)
  }

}

export default new UserService();
