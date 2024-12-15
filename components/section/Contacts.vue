<template>
  <div
    class="contacts"
    id="contacts"
  >
    <div class="content">
      <div class="contacts-data">
        <h2 class="title">contact me</h2>
        <p class="text">
          Got an&nbsp;exciting project?<br>
          Send me an&nbsp;email or contact&nbsp;me via instant message!
        </p>
        <ul class="contacts-list">
          <li>E-mail: <a href="mailto:nitrosick@gmail.com" target="_blank">nitrosick@gmail.com</a></li>
          <li><a href="https://t.me/Nitrosick" target="_blank">Telegram</a></li>
          <li><a href="https://wa.me/+79114952858" target="_blank">WhatsApp</a></li>
        </ul>
        <div class="splitter" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  background-color: $color-background;
  line-height: 1.3;

  &-data {
    max-width: $width-lg;
    margin: 0 auto;
  }

  &-list {
    margin: 0;
    line-height: 1.5;
  }
}

.title {
  color: var(--color-orange-3);
}

.text {
  margin: calc($padding-unit * 1.5) 0;
}
</style>
