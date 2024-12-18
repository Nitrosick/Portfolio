<template>
  <div class="header-container">
    <div class="background" />
    <header class="header">
      <Logo />
      <nav
        class="menu"
        :class="{ hidden: !menuOpened }"
      >
        <MenuItem to="#main" text="home" :selected="scroll <= 150" @close="menuOpened = false" />
        <MenuItem to="#aboutme" text="about me" @close="menuOpened = false" />
        <MenuItem to="#projects" text="projects" @close="menuOpened = false" />
        <MenuItem to="#contacts" text="contact me" class="contacts-button-m" @close="menuOpened = false" />
      </nav>
      <Button
        text="contact me"
        href="#contacts"
        class="contacts-button"
      />
      <button
        class="menu-switcher"
        @click.prevent="menuOpened = !menuOpened"
      >
        <Icon name="burger" size="l" />
      </button>
    </header>
  </div>
</template>

<script setup>
const scroll = ref(0)
const menuOpened = ref(false)
const handleScroll = () => scroll.value = window.scrollY

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  width: 100%;
  min-width: $min-width;
  z-index: 9;

  @include bp-lg {
    position: fixed;
    top: 0;
    left: 0;
    padding: $unit;
  }
}

.background {
  display: none;

  @include bp-lg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black-o-2);
    backdrop-filter: blur(20px);
    z-index: -1;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $unit;
  width: 100%;
  background-color: var(--color-black-o-1);
  padding: $unit calc($unit * 1.5);
  border-radius: 100rem;

  @include bp-lg {
    background: var(--gradient-orange-1);
    padding: calc($unit * 0.5) $unit;
  }
}

.menu {
  display: flex;
  align-items: center;
  gap: 0.2rem;

  @include bp-lg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 18.5rem;
    flex-direction: column;
    gap: calc($unit * 1.5);
    background-color: var(--color-black-o-2);
    backdrop-filter: blur(20px);
    transform: translateY(calc(100% + 1px)) scale(1, 1);
    transition: opacity $transition-time, height $transition-time;
    transform-origin: 50% 0;
    padding: $unit;
    overflow: hidden;

    &.hidden {
      opacity: 0;
      height: 0;
    }
  }
}

.menu-switcher {
  display: none;

  @include bp-lg {
    display: inline-block;
    border: none;
    background-color: transparent;
    cursor: $cursor-pointer;
  }
}

.contacts-button {
  @include bp-lg {
    display: none;
  }
}

.contacts-button-m {
  display: none;

  @include bp-lg {
    display: block;
  }
}
</style>
