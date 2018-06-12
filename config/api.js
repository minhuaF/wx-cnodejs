/**
 * Created at 2018.06.06
 * 配置所有的api常量地址
 */

const apiHeader = 'https://cnodejs.org/api/v1'
const apis = {
  getTopics: `/topics`,
  getTopicsDetail: `/topic`,
}

module.exports = {
  apiHeader,
  apis
}