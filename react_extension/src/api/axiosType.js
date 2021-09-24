import request from './request'
import qs from 'qs'
const baseUrl = '/api'

export const getAxiosData = (url, data) => {
  return request({
    url: `${baseUrl}${url}`,
    method: 'get',
    data,
  })
}

export const postAxiosData = (url, query) => {
  return request({
    url: `${baseUrl}${url}`,
    method: 'post',
    query,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}

export const postFormAxiosData = (url, query) => {
  return request({
    url: `${baseUrl}${url}`,
    method: 'post',
    data: qs.stringify(query),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  })
}