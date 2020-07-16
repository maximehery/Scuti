import { Vue, Component } from 'vue-property-decorator'

@Component({
  template: `
    <div class="top_bar">
      <button class="bar_content">
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/top_bar/settings.png" alt="Settings" />
      </button>
      <button class="bar_content">
        <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/top_bar/logout.png" alt="Logout" />
      </button>
    </div>
  `
})
class TopbarComponent extends Vue {

}

export default TopbarComponent
