<template>
  <footer>
    <div class="footer_container">
      <div class="left_section">
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/logo.png?raw=true" alt="Return" />
        </button>
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/rooms.png?raw=true" alt="Rooms" />
        </button>
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/shop.png?raw=true" alt="Shop" />
        </button>
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/inventory.png?raw=true" alt="Me" />
        </button>
      </div>
      <div class="middle_section">
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/ghosthead.png?raw=true" alt="Me" />
        </button>
        <form>
          <input type="text" ref="vueref6" maxLength={MAX_CHAT_LENGTH} name="chat" autoComplete="off" placeholder="Click here to chat" />
          <button>
            <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/chat_styles.png?raw=true" alt="Chat styles" />
          </button>
        </form>
      </div>
      <div class="right_section">
        <button>
          <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/bottom_bar/all_friends.png?raw=true" alt="Friends" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './footer.css'

export default class Footer extends Vue {
}
</script>
