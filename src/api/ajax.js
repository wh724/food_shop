/*
* AJAX请求函数
* */
import axios from 'axios'

export default function ajax (url = '',data = {},type = 'GET'){
  return new Promise(function (resolve,reject){
    let promise

    if(type === 'GET') {
      let dataStar= ''
      Object.keys(data).forEach(key => {
        dataStar += key + '=' + data[key] +'&'
      })
      if (dataStar !== '') {
        dataStar = dataStar.substring(0,dataStar.lastIndexOf('&'))
        url = url + '?' +dataStar
      }
    promise = axios.get(url)
    } else {
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    }) .catch (error => {
      reject(error)
    })
  })
}
