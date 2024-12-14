<template>
  <header class="header">
    <div class="logo" />
    <nav class="menu">
      <MenuItem to="#main" text="home" :selected="scroll === 0" />
      <MenuItem to="#aboutme" text="about me" />
      <MenuItem to="#projects" text="projects" />
    </nav>
    <Button text="contact me" />
  </header>
</template>

<script setup>
const scroll = ref(0)
const handleScroll = () => scroll.value = window.scrollY

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $padding-unit;
  width: 100%;
  background-color: var(--color-black-o);
  padding: $padding-unit;
  border-radius: 100rem;
}

.logo {
  background-color: $color-text;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
}

.menu {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
</style>
