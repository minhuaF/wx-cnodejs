/**
 * Created at 20180606
 * 统一请求封装处理
 */
import { apiHeader, apis } from '../config/api'

/**
 * get 请求
 * @param  {String}  urlName -请求的url
 * @param  {String}  method  -请求的方式
 * @param  {String}  params  -需要在地址栏后面携带的参数。若有多个，请先拼接完整
 * @param  {Object}  data    -请求体数据
 * @param  {boolean} loading -是否需要loading
 */
const fetch = ({ urlName = '', method = 'GET', data = {}, params = [], loading = true }) => {
  let otherParams = ''
  params.map((item, index) => {
    otherParams = `${otherParams}/${item}`
  })
  const url = `${apiHeader}${apis[urlName]}${otherParams}`

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      header: {
        'content-type': 'application/json'
      },
      data: data,
      success: (result)=>{
        resolve(result.data.data)
      },
      fail: reject
    })
  })
}

module.exports = { fetch }