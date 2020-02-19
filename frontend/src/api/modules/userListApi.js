import request from '../index';

const userListApi = {
  async getUserListApi(name){
    const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + name;
    const result = await request('get', url);
    return result;
  }
}

export default userListApi;