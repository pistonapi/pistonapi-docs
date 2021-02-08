<template>
  <main class="p-20">
    <header>
      Welcome to PistonAPI Documentation!
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
        :key="index"
      />
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
     {{ data.footer }}
    </div>
  </main>
</template>

<script>
import ArticleThumb from './widgets/ArticleThumb.vue'
import NavLink from '@theme/components/NavLink.vue'
export default {
  name: 'Home',
  components: { NavLink, ArticleThumb },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>