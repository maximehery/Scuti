import { container } from '../ui/views/Game'

let draggingMode
let clickCoords
let roomCoordsSave

export const drag = function () {
  container.on("mouseup", (event) => {
    draggingMode = false
  })

  container.on("mouseupoutside", (event) => {
    draggingMode = false
  })

  container.on("mousemove", (event) => {
    if (draggingMode) {
      const dx = event.data.global.x - clickCoords.x
      const dy = event.data.global.y - clickCoords.y
      container.x = roomCoordsSave.x + dx
      container.y = roomCoordsSave.y + dy
    }
  })

  container.on("mousedown", (event) => {
    draggingMode = true
    clickCoords = {
      x: event.data.global.x,
      y: event.data.global.y
    }
    roomCoordsSave = {
      x: container.x,
      y: container.y
    }
  })
}
