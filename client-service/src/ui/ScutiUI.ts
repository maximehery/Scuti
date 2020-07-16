import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '@/ui/components/header/HeaderComponent'
import TopbarComponent from '@/ui/components/header/TopbarComponent'
import FooterComponent from './components/footer/FooterComponent'
import ErrorSplashComponent from '@/ui/components/splash/ErrorSplashComponent'
import LoadingComponent from '@/ui/components/splash/LoadingComponent'
import SplashScreenComponent from '@/ui/components/splash/SplashScreenComponent'
import './App.css'
import ScutiEnvironement from '@/scuti/ScutiEnvironement'

@Component({
  components: {
    HeaderComponent, TopbarComponent, FooterComponent, ErrorSplashComponent, LoadingComponent, SplashScreenComponent
  },
  template: `
    <div v-if="initialized" id="app">
      <HeaderComponent />
      <TopbarComponent />
      <ErrorSplashComponent v-if="error !== ''" :errorText="error" />
      <LoadingComponent v-if="!gameLoaded" :loadingText="loadingInfo" />
      <SplashScreenComponent v-if="!loggedIn" />
      <FooterComponent />
    </div>
  `,
  created () {
    try {
      const game = ScutiEnvironement.getGame()

      game.uiManager.onLoadPost = (text: string) => {
        this.$data.loadingInfo = text
        game.uiManager.onGameStop = () => {
          this.$data.error = 'Game has stopped!'
        }
      }

      game.loadGame().then(() => {
        this.$data.gameLoaded = true
      }).catch(err => {
        let errorMessage = err

        if (err instanceof Error) {
          errorMessage = err.message
        }
        this.$data.gameLoaded = false
        this.$data.loggedIn = false
        this.$data.error = errorMessage
      })
      this.$data.initialized = true
      const win: any = window
      win.mainGame = game
    } catch (err) {
      let errorMessage = err

      if (err instanceof Error) {
        if (err.message.includes("WebGL unsupported")) {
          errorMessage = "Please enable hardware acceleration"
        }
      }
      this.$data.error = errorMessage
    }
  }
})

class ScutiUI extends Vue {
  gameLoaded = false
  loggedIn = false
  error = ''
  loadingInfo = ''
  initialized = false
}

export default ScutiUI
