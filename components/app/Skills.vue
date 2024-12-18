<template>
  <div class="skills">
    <span class="skills-title">Frontend:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.frontend"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span class="skills-title">Backend:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.backend"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span class="skills-title">Version Control:</span>
    <div class="skills-row">
      <div
        v-for="s in skills.git"
        :key="s"
        class="item caption"
      >
        {{ s }}
      </div>
    </div>
    <span class="skills-title">Design Tools:</span>
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
  grid-template-rows: repeat(4, auto);
  gap: $unit;
  white-space: nowrap;

  &-title {
    line-height: 1.5;

    @include bp-sm {
      line-height: 2;
    }
  }

  &-row {
    display: flex;
    align-items: center;
    gap: calc($unit / 2);

    @include bp-lg {
      flex-wrap: wrap;
    }

    @include bp-sm {
      gap: calc($unit / 3);
    }
  }

  @include bp-lg {
    gap: calc($unit * 1.5) $unit;
  }

  @include bp-sm {
    gap: calc($unit * 1.2) calc($unit * 0.5);
  }
}

.item {
  border: 2px solid var(--color-orange-2);
  border-radius: 100rem;
  padding: calc($unit / 3) calc($unit * 1.3);

  @include bp-sm {
    padding: calc($unit / 4) $unit;
  }
}
</style>
