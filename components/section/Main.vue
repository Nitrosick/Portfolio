<template>
  <main
    class="main"
    id="main"
  >
    <div class="background">
      <img
        src="/images/background.svg"
        alt="background"
        class="background-desktop"
        loading="lazy"
      >
      <img
        src="/images/background-m.svg"
        alt="background"
        class="background-mobile"
        loading="lazy"
      >
    </div>
    <div class="content">
      <div class="header-placeholder" />
      <Header />
      <div>
        <h1
          class="title"
          :class="{ 'title-typed': typed }"
        >
          hi,<br> {{ title }}
        </h1>
        <div class="subtitle">
          A&nbsp;Frontend Developer.<br>
          Turning Сomplex Requirements into&nbsp;Seamless, Functional&nbsp;Code
        </div>
      </div>
      <div class="social-container">
        <Button
          class="cv"
          text="CV"
          type="circle"
          icon="download"
          href="/docs/cv.pdf"
          download="Nikita Buzhinskiy CV"
        />
        <Social class="social" />
      </div>
    </div>
  </main>
</template>

<script setup>
const titleText = 'i’m Nikita Buzhinskiy'
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
  }, 150)
}

onMounted(() => toType())
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
}

.header-placeholder {
  display: none;

  @include bp-lg {
    display: block;
  }

  @include bp-md {
    height: 5vh;
  }
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

  &-desktop {
    @include bp-md {
      display: none;
    }
  }

  &-mobile {
    display: none;

    @include bp-md {
      display: block;
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $unit;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: calc($unit * 2);
}

.title {
  text-align: center;
  margin-bottom: calc($unit * 2);
  white-space: nowrap;

  &::after {
    content: '|';
    color: var(--color-orange-3);
  }

  br {
    display: none;
  }

  @include bp-sm {
    text-transform: capitalize;

    br {
      display: inline;
    }
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

.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social {
  margin-bottom: calc($unit * 3);

  @include bp-md {
    margin-bottom: $unit;
  }
}

.cv {
  position: absolute;
  bottom: 20%;
  right: 10%;

  @include bp-lg {
    bottom: calc($unit * 4);
    right: calc($unit * 2);
  }

  @include bp-md {
    position: relative;
    bottom: 0;
    right: 0;
    margin-bottom: calc($unit * 4);
  }
}

@keyframes blink {
  from, to { color: transparent }
  50% { color: var(--color-orange-3) }
}
</style>
