import axios from 'axios'

const request = (method, url, data) => {
  return axios({
    method,
    url,
    data
  }).then(response => {
    return response;
  }).catch(error => {
    const{ status } = error.response;
    console.log(status)
    console.log('에러 호출 실패', error);
    throw error
  })
}


export default request; 


