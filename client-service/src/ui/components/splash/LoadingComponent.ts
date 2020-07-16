import { Vue, Component, Prop } from 'vue-property-decorator'
import GenericSplashComponent from '@/ui/components/splash/GenericSplashComponent'

@Component({
  components: {
    GenericSplashComponent
  },
  template: `
    <GenericSplashComponent>
      <div class="loading">
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/loading.gif" alt="Loading" />
        <p>Loading...</p>
        <p class="loading_info">
          {{ loadingText }}
        </p>
      </div>
    </GenericSplashComponent>
  `
})
class LoadingComponent extends Vue {
  @Prop({ type: String }) loadingText
}

export default LoadingComponent
