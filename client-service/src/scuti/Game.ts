import MainEngine from './graphics/MainEngine'
import UIManager from '@/scuti/ui/UIManager'

export default class Game {
  engine: MainEngine
  uiManager: UIManager
  isStarting: boolean

  constructor () {
    this.engine = new MainEngine(this.gameLoop, this.onResize, this.onMouseMove, this.onTouchStart, this.onTouchMove, this.onMouseClick, this.onMouseDoubleClick)
    this.uiManager = new UIManager(this)
    this.isStarting = false
  }

  loadGame (): Promise<void> {
    this.isStarting = true
    this.uiManager.postLoading('Initializing game engine')
    return Promise.all([
    ]).then(() => {
      this.uiManager.postLoading('Connecting to server')
    })
  }

  test () {
    this.engine.onEnterRoom()

    this.engine.getLogicStage().addChild(this.engine.getLogicStage())
    this.uiManager.log('Loaded room')
  }

  onMouseMove = (x: number, y: number, isMouseDragging: boolean) => {
  }

  onTouchStart = (x: number, y: number) => {

  }

  onTouchMove = (x: number, y: number) => {

  }

  onMouseClick = (x: number, y: number, shiftKey: boolean, ctrlKey: boolean, altKey: boolean) => {

  }

  onMouseDoubleClick = (x: number, y: number) => {

  }

  onResize = () => {

  }

  gameLoop = (delta: number) => {

  }

  stop () {
    this.uiManager.onGameStop()
    console.log('Stopping game...')
  }
}
