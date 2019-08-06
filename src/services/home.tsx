import axios from 'axios';
import Request from './request'
// 获取当前用户的部分信息
// export const loadUserCurrent = (id: string) => Request.get(`/public/static/json/${id}.json`)
export const loadUserCurrent = (id: string) => axios.get(`./public/static/json/${id}.json`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});