<template>
  <div class="social">
    <a
      v-for="s in social"
      :key="s.id"
      :href="s.link"
      target="_blank"
      class="social-item"
    >
      <Icon
        :name="s.icon"
        size="l"
      />
    </a>
  </div>
</template>

<script setup>
import social from '@/const/social'
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  gap: calc($padding-unit * 1.5);

  &-item {
    transition: filter 0.2s;

    &:hover {
      filter: drop-shadow($shadow);
    }
  }
}
</style>
