import platziMusicService from './platziMusicService'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  platziMusicService.get('/search', {
    params: { q, type }
  })
    .then((res) => res.data)
}

export default trackService
