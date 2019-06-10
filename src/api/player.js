import { backen } from './path'
import aixosGet from './aixosGet'

// 获取歌曲地址
export function getSongUrl(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'song/url', {params: params}).then(data => {
      resolve(data)
    })
  })
}

// 获取歌曲歌词
export function getSongLyric(params) {
  return new Promise((resolve, reject) => {
    aixosGet.get(backen + 'lyric', {params: params}).then(data => {
      resolve(data)
    })
  })
}
