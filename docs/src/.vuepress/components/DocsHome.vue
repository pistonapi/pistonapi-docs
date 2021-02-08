<template>
  <main class="p-20">
    <header class="my-20">
      <div class="text-5xl font-semibold">
        {{ data.tagline }}
      </div>
      <div class="text-3xl my-4">
        {{ data.bottonline }}
      </div>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="grid grid-cols-3 gap-4 my-10"
    >
      <ArticleThumb
        v-for="(feature, index) in data.features"
        :title="feature.title"
        :details="feature.details"
        :icon="feature.icon"
        :color="feature.color"
        :key="index"
      />
    </div>

    <Content class="theme-default-content custom" />

    <div>
      Made with ❤️+☕. This website is
      <a href="https://github.com/pistonapi/pistonapi-docs" target="_blank"> Open Source</a>.
    </div>
  </main>
</template>

<script>
import ArticleThumb from "./widgets/ArticleThumb.vue";
import NavLink from "@theme/components/NavLink.vue";
export default {
  name: "Home",
  components: { NavLink, ArticleThumb },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>