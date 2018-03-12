/**
 * ajax请求工具类
 * 用Promise封装axios
 * Created by xfz
 */
import axios from 'axios';

console.log(process);
if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://172.168.1.114';
    console.log('a');
}else if(process.env.NODE_ENV == 'test') {
    axios.defaults.baseURL = 'https://192.168.132.11';
    console.log('b');
}else if(process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '';
    console.log('c');
}

axios.defaults.timeout = 5000;
axios.defaults.responseType =  'json';
axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'Content-Type':'application/json;charset=utf-8'
};
// axios.defaults.baseURL ='';
// axios.defaults.withCredentials = false,//default是否跨域请求

//http request 拦截器
axios.interceptors.request.use(config => {
    	console.log('显示loading');
    	// const token = localStorage.get('token');//getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    	config.data = JSON.stringify(config.data);
    	// if(token){
    	//   config.headers.Token = token;
    	// }
    	return config;
  	},
  	error => {
    	return Promise.reject(error);
  	}
);

//http response 拦截器
axios.interceptors.response.use(response => {
		console.log('关闭loading');
    	// if(response.data.errCode ==2){
    	//   router.push({
    	//     path:"/login",
    	//     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    	//   })
    	// }
    	return response;
  	},
  	error => {
  		console.log('关闭loading');   	
    	alert('请求出错');
    	return Promise.reject(error)
  	}
)

//get
function get(url, data = {}){
  	return new Promise((resolve,reject) => {
    	axios.get(url, data)
    	.then(response => {
    	  resolve(response.data);
    	})
    	.catch(err => {
    	  	reject(err);
    	});
  	});
}

//post
function post(url, data = {}){
   return new Promise((resolve,reject) => {
     	axios.post(url, data)
      	.then(response => {
      	  	resolve(response.data);
      	},err => {
      	  	reject(err);
      	});
   });
 }

 export default {get, post};