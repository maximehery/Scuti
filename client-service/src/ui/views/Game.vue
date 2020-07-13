<template>
  <div>
    <Header />
    <Footer />
    <Topbar />
    <canvas id="game" ref="game"></canvas>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from '@/ui/components/header/Header'
import Footer from '@/ui/components/footer/Footer'
import Topbar from '@/ui/components/header/Topbar'

import * as PIXI from 'pixi.js'
import { RoomGenerator } from '@/scuti/RoomGenerator'
import { drag } from '@/scuti/RoomDragging'
export const container = new PIXI.Container()

@Component({
  components: {
    Header, Footer, Topbar
  }
})
export default class Game extends Vue {
  mounted () {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: false,
      transparent: false,
      backgroundColor: 0x121212,
      view: this.$refs.game
    })
    const floor = 'xxxxxxxxxxxxxxxxxxxxx\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx000000xxxxxxxx000000\nx000000x000000x000000\nx000000x000000x000000\nx000000x000000x000000\nx000000x000000x000000\nx000000x000000x000000\nx000000x000000x000000\nx000000xxxxxxxx000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nx00000000000000000000\nxxxxxxxxxxxxxxxxxxxxx\n'
    RoomGenerator.generate(floor, 2)

    console.log(app)

    container.interactive = true
    container.buttonMode = true
    container.x = app.screen.width / 2
    container.y = app.screen.height / 2
    app.stage.addChild(container)
    drag()
  }
}
</script>
