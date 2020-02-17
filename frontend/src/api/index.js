import axios from 'axios'

const request = (method, url, data) => {
  return axios({
    method,
    url,
    data
  }).then(response =>{
    return response;
  }).catch(ex =>{
    console.log('에러 호출 실패', ex);
    throw ex
  })
}


export default request; 