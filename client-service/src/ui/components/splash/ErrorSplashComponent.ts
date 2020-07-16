import { Vue, Component, Prop } from 'vue-property-decorator'
import GenericSplashComponent from '@/ui/components/splash/GenericSplashComponent'

@Component({
  components: {
    GenericSplashComponent
  },
  template: `
    <GenericSplashComponent>
      <p>{{ errorText }}</p>
    </GenericSplashComponent>
  `
})
class ErrorSplashComponent extends Vue {
  @Prop({ type: String }) errorText
}

export default ErrorSplashComponent
