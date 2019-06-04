<template>
  <transition appear name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import { getDiscListDetail } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      title () {
        return this.disc.name
      },
      bgImage () {
        return this.disc.picUrl
      },
      ...mapGetters([
        'disc'
      ])
    },
    data () {
      return {
        songs: []
      }
    },
    created () {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        if (!this.disc.id) {
          this.$router.push('/recommend')
          return
        }
        let params = {
          id: this.disc.id
        }
        getDiscListDetail(params).then((res) => {
          if (res.data.code === ERR_OK) {
            this.songs = res.data.playlist.tracks
          }
        })
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
