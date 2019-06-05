import { playMode } from 'common/js/config'
const state = {
  singer: {}, // 当前播放曲目的详情数据
  playing: false, // 是否播放
  fullScreen: false, // 是否全屏或小屏
  playlist: [], // 播放列表数据
  sequenceList: [], // 随机列表数据
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放值
  disc: {}
}

export default state
