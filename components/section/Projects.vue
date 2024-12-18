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

.content {
  @include bp-md {
    padding-left: 0;
    padding-right: 0;
  }
}

.title {
  margin-bottom: calc($unit * 1.5);

  @include bp-md {
    padding-left: calc($unit * 2);
  }

  @include bp-sm {
    padding-left: $unit;
  }
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $unit;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @include bp-xl {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-md {
    display: flex;
    padding: 0 calc($unit * 2);
  }

  @include bp-sm {
    padding: 0 $unit;
  }
}
</style>
