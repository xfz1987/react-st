/**
 * ajax请求工具类
 * 用Promise封装axios
 */
import axios from 'axios';

axios.interceptors.request.use(config => {
  	// loading
  	return config;
}, error => {
  	return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.resolve(error.response);
})

function checkStatus (response) {
  return response && (response.status === 200 || response.status === 304 || response.status === 400) ? response.data : {status: -404, msg: '网络异常'};
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if(res.status === -404){
    alert(res.msg);
  }
  if(res.data && (!res.data.success)){
    alert(res.data.error_msg);
  }
  return res;
}

export default {
  post(url, data){
    return axios({
      method: 'post',
      url,
      data: JSON.stringify(data),
      timeout: 10000,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get(url, params){
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
};