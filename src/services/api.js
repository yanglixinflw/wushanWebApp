import request from '../utils/request';
// 开发环境
const envNet = 'http://192.168.30.127:88'
//设备墒情
export function queryMoisture() {
  return request('/api/data/moisture', {
    method: 'POST'
  });
}
//设备井电
export function queryWells() {
  return request('/api/data/wells', {
    method: 'POST'
  });
}
//设备气象
export function queryMeteorology() {
  return request('/api/data/meteorology', {
    method: 'POST'
  });
}
//设备气象历史数据
export function queryMeteorologyHistory() {
  return request('/api/data/meteorology/history', {
    method: 'POST'
  });
}
//设备智能球阀
export function queryBall() {
  return request('/api/data/ball', {
    method: 'POST'
  });
}
export function queryLogin() {
  return request(`${envNet}/api/Account/login`, {
    method: 'POST',
    credentials: "include",
    mode: 'cors'
  });
}