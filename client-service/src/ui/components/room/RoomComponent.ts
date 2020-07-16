import Vue from 'vue'
import './room.css'

export default class RoomComponent {
  private static _component: any

  public static Register () {
    RoomComponent._component = Vue.component('room', {
      template: `

      <canvas id="room"></canvas>

      `
    })
  }

  static get Self () {
    return RoomComponent._component
  }
}
