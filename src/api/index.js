/*
* 包含n个接口函数
* */
import ajax from './ajax'
//1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = geohash => ajax('/api/position' + geohash)
//2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax('api/index_category')
//3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = ({latitude,longitude}) => ajax('/api/shops',{latitude,longitude})
//4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqkeyShops = ({keyWords,geohash}) => ajax('/api/search_shops',{keyWords ,geohash})
//5、获取一次性验证码](#5获取一次性验证码)<br/>
export const oneYan = () => ajax('/api/captcha')
//6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
//7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//8、手机号验证码登陆](#8手机号验证码登陆)
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//9、根据会话获取用户信息](#9根据会话获取用户信息)
export const reqUser = () => ajax('/api/userinfo')
//10、用户登出](#10用户登出)
export const reqLogout = () => ajax('/api/logout')
