import { Vue, Component } from 'vue-property-decorator'
import Logo from './LogoComponent'
import './splash.css'

@Component({
  components: {
    Logo
  },
  template: `
    <div class="main_wrapper">
      <div class="main_container">
        <div class="main_content">
          <button class="close">
            X
          </button>
          <Logo />
          <hr />
          <slot />
        </div>
      </div>
    </div>
  `
})
class GenericSplashComponent extends Vue {

}

export default GenericSplashComponent
