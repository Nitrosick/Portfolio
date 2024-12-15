<template>
  <main
    class="main"
    id="main"
  >
    <div class="background">
      <img
        src="/images/background.svg"
        alt="Background"
        loading="lazy"
      >
    </div>
    <div class="content">
      <Header />
      <div>
        <h1
          class="title"
          :class="{ 'title-typed': typed }"
        >
          {{ title }}
        </h1>
        <div class="subtitle">
          A&nbsp;Frontend Developer.<br>
          Turning Сomplex Requirements into&nbsp;Seamless, Functional&nbsp;Code
        </div>
      </div>
      <Social class="social" />
      <Button
        class="cv"
        text="CV"
        type="circle"
        icon="download"
        href="/docs/cv.pdf"
        download="Nikita Buzhinskiy CV"
      />
    </div>
  </main>
</template>

<script setup>
const titleText = 'hi, i’m Nikita Buzhinskiy'
const title = ref('')
const typed = ref(false)

const toType = () => {
  const letters = titleText.split('')
  const timeout = setInterval(() => {
    if (letters.length <= 1) {
      clearInterval(timeout)
      typed.value = true
    }
    title.value += letters.shift()
  }, 120)
}

onMounted(() => toType())
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $padding-unit;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: calc($padding-unit * 2);
}

.title {
  text-align: center;
  margin-bottom: calc($padding-unit * 2);

  &::after {
    content: '|';
    color: var(--color-orange-3);
  }
}

.title-typed {
  &::after {
    animation: blink 1s step-end infinite;
  }
}

.subtitle {
  text-align: center;
}

.social {
  margin-bottom: calc($padding-unit * 3);
}

.cv {
  position: absolute;
  bottom: 20%;
  right: 10%;
}

@keyframes blink {
  from, to { color: transparent }
  50% { color: var(--color-orange-3) }
}
</style>
