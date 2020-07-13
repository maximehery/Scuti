<template>
  <header>
    <div class="bar_content">
      <span>{{ this.getMoneyNumber(credits) }}</span>
      <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/top_bar/credits.png?raw=true" alt="Credits" />
    </div>
    <div class="bar_content">
      <span class="logo">Scuti Project</span>
    </div>
    <div class="bar_content">
      <span>0</span>
      <img src="https://github.com/Josedn/bobba_client/blob/master/public/images/top_bar/hc.png?raw=true" alt="Habbo club" />
    </div>
  </header>
</template>

<script lang="ts">
import './header.css'

export default {
  name: 'Header',
  props: {
    credits: {
      type: Number,
      default: 900000
    }
  },
  methods: {
    getMoneyNumber (value: number) {
      return value.toLocaleString(navigator.language, {
        minimumFractionDigits: 0
      })
    }
  }
}
</script>
