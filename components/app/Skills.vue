<template>
  <div class="skills">
    <span>Frontend:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.frontend"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span>Backend:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.backend"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span>Version Control:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.git"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span>Design Tools:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.design"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
  </div>
</template>

<script setup>
import skills from '@/const/skills'
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  gap: $padding-unit;
  white-space: nowrap;

  &-row {
    display: flex;
    align-items: center;
    gap: calc($padding-unit / 2);
  }
}

.item {
  border: 2px solid var(--color-orange-2);
  border-radius: 100rem;
  padding: calc($padding-unit / 3) calc($padding-unit * 1.3);
}
</style>
