import request from '../index';

const userListApi = {
  async getUserListApi(name){
    try {
      const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + name;
      const result = await request('get', url);
      return result;
    }
    catch(error) {
      console.log(error)
    }
    
  }
}


export default userListApi;