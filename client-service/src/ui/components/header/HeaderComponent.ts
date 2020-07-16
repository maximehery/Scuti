import { Vue, Component, Prop } from 'vue-property-decorator'
import './header.css'

@Component({
  template: `
    <header>
      <div class="bar_content">
        <span>{{this.getMoneyNumber(credits)}}</span>
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/top_bar/credits.png" alt="Credits" />
      </div>
      <div class="bar_content">
        <span class="logo">
          Scuti Project
        </span>
      </div>
      <div class="bar_content">
        <span>0</span>
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/top_bar/hc.png" alt="Habbo Club" />
      </div>
    </header>
  `
})
class HeaderComponent extends Vue {
  @Prop({ type: Number, default: 900000 }) credits

  getMoneyNumber (value: number) {
    return value.toLocaleString(navigator.language, {
      minimumFractionDigits: 0
    })
  }
}

export default HeaderComponent
