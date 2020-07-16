import Game from '@/scuti/Game'

export default class UIManager {
  game: Game
  onLoadPost: (text: string) => void
  onGameStop: () => void

  constructor (game: Game) {
    this.game = game
    this.onLoadPost = () => { }
    this.onGameStop = () => { }
  }

  log (text: string) {
    console.log('Log: ' + text)
  }

  postLoading (text: string) {
    console.log('Loading: ' + text)
    this.onLoadPost(text)
  }
}
