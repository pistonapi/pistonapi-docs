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
        :linkDestiny="feature.linkDestiny"
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
<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */
svg{
    display: block;
    vertical-align: middle;
}

.my-20 {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.text-5xl {
    font-size: 3rem;
    line-height: 1;
}
.font-semibold {
    font-weight: 600;
}
.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
}
@media (min-width: 640px) {
    .grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
    .md:p-20 {
        padding: 5rem;
    }
}
.p-20 {
        padding: 1rem;
}
.gap-4 {
    gap: 1rem;
}
.my-10 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}
.grid {
    display: grid;
}
.p-10 {
    padding: 2.5rem;
}
.cursor-pointer {
    cursor: pointer;
}
.rounded-lg {
    border-radius: .5rem;
}
.to-purple-600 {
    --tw-gradient-to: #7c3aed;
}
.text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.from-purple-500 {
    --tw-gradient-from: #8b5cf6;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,rgba(139,92,246,0));
}
.bg-gradient-to-br {
    background-image: linear-gradient(to bottom right,var(--tw-gradient-stops));
}
.to-indigo-600 {
    --tw-gradient-to: #4f46e5;
}
.from-indigo-500 {
    --tw-gradient-from: #6366f1;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,rgba(99,102,241,0));
}
.bg-indigo-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(79,70,229,var(--tw-bg-opacity));
}
.to-green-600 {
    --tw-gradient-to: #059669;
}
.from-green-500 {
    --tw-gradient-from: #10b981;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,rgba(16,185,129,0));
}
.bg-green-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(5,150,105,var(--tw-bg-opacity));
}
.bg-gradient-to-br {
    background-image: linear-gradient(to bottom right,var(--tw-gradient-stops));
}
.w-14 {
    width: 2.5rem;
}
.p-3 {
    padding: .75rem;
}
.mb-6 {
    margin-bottom: 1.5rem;
}
.my-2 {
    margin-top: .5rem;
    margin-bottom: .5rem;
}
.text-xl {
    font-size: 1.25rem;
}
.text-lg, .text-xl {
    line-height: 1.75rem;
}
.font-semibold {
    font-weight: 600;
}
.rounded-full {
    border-radius: 9999px;
}
.bg-purple-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(124,58,237,var(--tw-bg-opacity));
}
.text-lg, .text-xl {
    line-height: 1.75rem;
}
.text-lg {
    font-size: 1.125rem;
}
</style>