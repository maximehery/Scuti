import { Vue, Component } from 'vue-property-decorator'
import './footer.css'

@Component({
  template: `
    <footer>
      <div class="footer_container">
        <div class="left_section">
          <button>
            <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/logo.png"
                 alt="Return"/>
          </button>
          <button>
            <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/rooms.png"
                 alt="Rooms"/>
          </button>
          <button>
            <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/shop.png"
                 alt="Shop"/>
          </button>
          <button>
            <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/inventory.png"
                 alt="Me"/>
          </button>
        </div>
        <div class="middle_section">
          <button>
            <img src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/ghosthead.png"
                 alt="Me"/>
          </button>
          <form>
            <input type="text" name="chat" autoComplete="off" placeholder="Click here to chat"/>
            <button>
              <img
                src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/chat_styles.png"
                alt="Chat styles"/>
            </button>
          </form>
        </div>
        <div class="right_section">
          <button>
            <img
              src="https://raw.githubusercontent.com/Josedn/bobba_client/master/public/images/bottom_bar/all_friends.png"
              alt="Friends"/>
          </button>
        </div>
      </div>
    </footer>
  `
})
class FooterComponent extends Vue {

}

export default FooterComponent
