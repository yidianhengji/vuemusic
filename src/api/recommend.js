import { backen } from './path'
import aixosGet from './aixosGet'

// 获取轮播图
export function getBanner(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'banner', {params: params}).then(data => {
      resolve(data)
    })
  })
}

// 获取推荐歌单
export function getDiscList(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'personalized', {params: params}).then(data => {
      resolve(data)
    })
  })
}

// 根据推荐歌单id获取详情D
export function getDiscListDetail(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'playlist/detail', {params: params}).then(data => {
      resolve(data)
    })
  })
}
