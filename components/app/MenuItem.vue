<template>
  <NuxtLink
    :to="to"
    class="menu-item"
    :class="{ selected: selected }"
  >
    {{ text }}
    <div class="underline" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: { type: String, default: '#' },
  text: { type: String, required: true },
  selected: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  display: block;
  line-height: calc($padding-unit * 2);
  padding: 0 calc($padding-unit * 2);
  text-shadow: $shadow;

  &:hover {
    .underline {
      transform: scale(1, 1);
    }
  }
}

.selected {
  cursor: default;

  .underline {
    transform: scale(1, 1);
  }
}

.underline {
  position: absolute;
  bottom: -0.4rem;
  left: 0;
  width: 100%;
  background-color: var(--color-orange-2);
  height: 0.3rem;
  transform-origin: 50% 50%;
  transform: scale(0, 1);
  transition: transform 0.2s;
}
</style>
