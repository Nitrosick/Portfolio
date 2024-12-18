<template>
  <div class="project">
    <div class="screenshot">
      <img
        :src="image"
        alt="screenshot"
        class="screenshot-img"
        loading="lazy"
      >
    </div>
    <div class="data">
      <span class="title">
        {{ data.name }}
      </span>
      <p class="description caption">
        {{ data.description }}
      </p>
      <div class="plug" />
      <div class="footer">
        <div class="footer-links">
          <Button
            text="see project"
            type="s"
            :href="data.link"
          />
          <Button
            v-if="data.github"
            type="s"
            icon="github_1"
            :href="data.github"
            title="GitHub link"
          />
        </div>
        <div class="stack">
          <Icon
            v-for="t in data.stack"
            :key="t"
            :name="t.toLowerCase()"
            :title="t"
          />
        </div>
      </div>
    </div>
    <div class="lens" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
})

const image = computed(() => `/images/projects/${props.data.name.replaceAll(' ', '_')}.webp`)
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  background-color: var(--color-black-o-1);
  border-radius: $unit;
  overflow: hidden;
  box-shadow: $shadow;
  scroll-snap-align: none center;

  &:hover {
    .screenshot-img {
      transform: scale(1.03, 1.03);
    }

    .lens {
      opacity: 0.25;
    }
  }

  @include bp-md {
    min-width: 70vw;
  }

  @include bp-sm {
    border-radius: calc($unit * 0.7);
  }
}

.screenshot {
  aspect-ratio: 11/7;
  border-radius: $unit;
  overflow: hidden;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform calc($transition-time * 5);
  }

  @include bp-sm {
    border-radius: calc($unit * 0.7);
  }
}

.data {
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $unit;
  padding-bottom: calc($unit * 2);

  @include bp-sm {
    height: 14.5rem;
    padding-bottom: $unit;
  }
}

.title {
  text-transform: capitalize;
  font-weight: 600;
}

.description {
  margin: $unit 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-links {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @include bp-sm {
      order: 2;
    }
  }

  @include bp-sm {
    flex-direction: column;
    gap: calc($unit * 0.8);
    align-items: flex-start;
  }
}

.stack {
  display: flex;
  gap: 0.3rem;

  @include bp-sm {
    order: 1;
  }
}

.lens {
  position: absolute;
  top: -60%;
  left: -55%;
  width: 140%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: linear-gradient(190deg, var(--color-white), transparent);
  opacity: 0;
  transition: opacity calc($transition-time * 2);

  @include bp-sm {
    display: none;
  }
}
</style>
