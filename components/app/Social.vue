<template>
  <div
    class="social"
    :class="{ minimized: minimized }"
  >
    <a
      v-for="s in social"
      :key="s.id"
      :href="s.link"
      target="_blank"
      class="social-item"
    >
      <Icon
        :name="s.icon"
        :size="minimized ? 'm' : 'l'"
      />
    </a>
  </div>
</template>

<script setup>
import social from '@/const/social'

const props = defineProps({
  minimized: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  gap: calc($unit * 1.5);

  &-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: filter $transition-time;
    border-radius: 0.5rem;

    &:hover {
      filter: drop-shadow($shadow);
    }

    &:active,
    &:focus {
      background-color: var(--color-white-o);
      outline: 0.5rem solid var(--color-white-o);
    }
  }

  @include bp-md {
    gap: calc($unit * 1.35);
  }

  @include bp-sm {
    gap: calc($unit * 1.2);
  }
}

.minimized {
  gap: calc($unit * 0.8);
}
</style>
