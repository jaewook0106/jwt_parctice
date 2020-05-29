import request from '@/api/interceptor';

const userListApi = {
  async getUserListApi(name){
    try {
      console.log('userList')
      const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + name;
      console.log(url)
      const result = await request.get(url);
      console.log('result', result)
      return result;
    } catch(error) {
      console.log('bbberror', error);
    }
  }
}

export default userListApi;