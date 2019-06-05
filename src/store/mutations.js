import * as types from './mutation-types'

const mutations = {
  // 当前播放的歌曲数据
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  // 是否播放
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  // 是否全屏或小屏
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  // 播放列表数据
  [types.SET_PLAYLIST] (state, list) {
    state.playlist = list
  },
  // 随机列表数据
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  // 播放模式
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  // 当前播放值
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC] (state, disc) {
    state.disc = disc
  }
}

export default mutations
