<template>
  <div
    class="about-me"
    id="aboutme"
  >
    <div class="content">
      <div class="text">
        <h2 class="title">about me</h2>
        <p>
          I'm&nbsp;a&nbsp;Frontend-Focused Web&nbsp;Developer dedicated to&nbsp;crafting and managing
          the&nbsp;front-end of&nbsp;websites and web&nbsp;applications that drive product success.
          Explore my&nbsp;work in&nbsp;the <a href="#projects" class="text-link">Project Section</a>
        </p>
        <p>
          I'm&nbsp;open to&nbsp;job opportunities where I&nbsp;can contribute, grow, and expand my
          skills. If you&nbsp;have an&nbsp;opportunity that aligns with my&nbsp;experience, feel free to
          reach&nbsp;out!
        </p>
      </div>
      <div class="splitter" />
      <div class="skills-container">
        <h2 class="title">my skills</h2>
        <Skills />
        <div>
          <Button
            class="contact"
            text="contact me"
            type="l"
            href="#contacts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  background-color: $color-background;
  line-height: 1.3;
}

.content {
  max-width: $width-lg;
  padding-top: calc($padding-unit * 4);
  padding-bottom: calc($padding-unit * 4);
}

.title {
  color: var(--color-orange-3);
}

.text {
  display: flex;
  flex-direction: column;
  gap: calc($padding-unit * 1.5);

  &-link {
    font-weight: 600;
    color: var(--color-orange-2);
    transition: color 0.2s;

    &:hover {
      color: var(--color-orange-3);
    }
  }
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: calc($padding-unit * 1.5);
}

.contact {
  margin-top: $padding-unit;
}
</style>
