/**
 * 声明CNode下的所有请求
 * Creacted at 20180606
 */
import { fetch } from './fetch.js'

/**
 * 获取主题首页
 * @params {Number} page     - 页数
 * @params {String} tab      - 主题分类。目前有ask share job good
 * @params {Number} limit    - 每一页的主题数量
 * @params {String} mdrender - 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本
 */
const getTopics = ({ page = 1, tab = 'share', limit = 15, mdrender = 'false' }) => {
  return fetch({
    urlName: 'getTopics',
    method: 'GET',
    data: {
      page: page,
      tab: tab,
      limit: limit,
      mdrender: mdrender
    }
  }).then(res => res)
}

/**
 * 获取主题详情
 * @params {String} mdrender      - 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本 
 * @params {String} accesstoken   - 用户特定标示
 * @params {Array} params         - 需要直接添加在api url上，如 /21421414
 */
const getTopicDetail = ({ mdrender = 'false', accesstoken = '', params=[] }) => {
  return fetch({
    urlName: 'getTopicsDetail',
    method: 'GET',
    params: params,
    data: {
      mdrender: mdrender,
      accesstoken: accesstoken
    }
  }).then(res => res)
}

module.exports = {
  getTopics,
  getTopicDetail
}