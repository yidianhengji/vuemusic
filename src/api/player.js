import { backen } from './path'
import aixosGet from './aixosGet'

// 获取轮播图
export function getSongUrl(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'song/url', {params: params}).then(data => {
      resolve(data)
    })
  })
}
