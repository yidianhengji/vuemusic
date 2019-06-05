// 当前播放曲目的详情数据
export const singer = state => state.singer
// 是否播放
export const playing = state => state.playing
// 是否全屏或小屏
export const fullScreen = state => state.fullScreen
// 播放列表数据
export const playlist = state => state.playlist
// 随机列表数据
export const sequenceList = state => state.sequenceList
// 播放模式
export const mode = state => state.mode
// 当前播放值
export const currentIndex = state => state.currentIndex
// 当前播放歌曲的详情数据
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc
