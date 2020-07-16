import { Vue, Component } from 'vue-property-decorator'
import GenericSplashComponent from '@/ui/components/splash/GenericSplashComponent'

@Component({
  components: {
    GenericSplashComponent
  },
  template: `
    <GenericSplashComponent>
      <p>
        Please enter your username and pick a look!
      </p>
    </GenericSplashComponent>
  `
})

class SplashScreenComponent extends Vue {

}

export default SplashScreenComponent
