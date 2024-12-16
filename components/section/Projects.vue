<template>
  <div
    class="projects"
    id="projects"
  >
    <div class="content">
      <h2 class="title">my projects</h2>
      <div class="items">
        <Project
          v-for="p in projects"
          :key="p.id"
          :data="p"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '@/const/projects'
</script>

<style lang="scss" scoped>
.projects {
  background: var(--gradient-orange-4);
}

.title {
  margin-bottom: calc($padding-unit * 1.5);
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $padding-unit;

  @include breakpoint-xl {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint-md {
    grid-template-columns: 1fr;
  }
}
</style>
