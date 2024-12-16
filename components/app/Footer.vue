<template>
  <footer class="footer">
    <div>
      <div class="name caption">Nikita Buzhinskiy</div>
      <div class="caption">A Frontend Developer</div>
    </div>
    <Social />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $padding-unit;
  padding-top: $padding-unit;
  line-height: 1.5;
}

.name {
  font-weight: 700;
}
</style>
