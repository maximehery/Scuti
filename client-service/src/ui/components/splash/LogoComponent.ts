import { Vue, Component } from 'vue-property-decorator'

@Component({
  template: `
    <div class="logo">
      <div>
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/ghosthead.png" alt="Bobba" />
        <h1>Scuti Project</h1>
      </div>
    </div>
  `
})
class LogoComponent extends Vue {

}

export default LogoComponent
