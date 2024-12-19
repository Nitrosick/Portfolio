<template>
  <Component
    :is="href ? 'a' : 'button'"
    :href="href"
    :download="download"
    :target="target"
    :class="[
      `button button-${type}`,
      { compact: icon && !text }
    ]"
  >
    <div class="button-bg" />
    <div class="button-bg button-bg-hover" />
    <div class="button-bg button-bg-active" />
    <div class="button-text">
      <span v-if="text">{{ text }}</span>
      <Icon
        v-if="icon"
        :name="icon"
      />
    </div>
  </Component>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'm' },
  text: { type: String, default: null },
  icon: { type: String, default: null },
  href: { type: String, default: undefined },
  download: { type: [String, Boolean], default: undefined }
})

const target = computed(() => {
  const { href } = props
  if (!href || href.startsWith('#')) return undefined
  return '_blank'
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: $font-main;
  color: $color-text;
  border-radius: 100rem;
  box-shadow: $shadow;
  overflow: hidden;
  cursor: $cursor-pointer;

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-orange-3);
    z-index: 0;
    transition: opacity $transition-time;
  }

  &-bg-hover {
    background: var(--color-orange-2);
    opacity: 0;
  }

  &-bg-active {
    background: var(--gradient-orange-1);
    opacity: 0;
  }

  &-text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    z-index: 1;
  }

  &:hover {
    .button-bg-hover {
      opacity: 1;
    }
  }

  &:focus {
    outline: 0.5rem solid var(--color-white-o);
  }

  &:active {
    box-shadow: none;

    .button-bg-active {
      opacity: 1;
    }
  }
}

.button-s {
  height: calc($unit * 2);
  padding: 0 $unit;
  font-size: $font-size-caption;
}

.button-m {
  padding: calc($unit / 2) $unit;
}

.button-l {
  padding: $unit calc($unit * 2.5);

  @include bp-sm {
    padding: calc($unit * 0.8) calc($unit * 2);
  }
}

.button-circle {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  @include bp-sm {
    width: 6rem;
    height: 6rem;
  }
}

.compact {
  padding: 0 calc($unit / 2);
}
</style>
