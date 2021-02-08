<template>
  <div
  :class="` from-${color}-500 to-${color}-600`"
    class="cursor-pointer hover:bg-gradient-to-tr bg-gradient-to-br p-10 rounded-lg text-white"
  >
    <div
    :class="`bg-${color}-600`"
      class="font-semibold text-xl my-2 mb-6 w-14  p-3 rounded-full"
    >
    <component :is="`Icons${icon}`"/>
    </div>
    <div class="font-semibold text-xl my-2 mb-4">
      {{ title }}
    </div>
    <div class="text-lg">
      {{ details }}
    </div>
  </div>
</template>
<script>
import IconsVideo from "./icons/video.vue";
import IconsTerminal from "./icons/terminal.vue";
import IconsBook from "./icons/book.vue";
export default {
  components: { IconsVideo, IconsTerminal, IconsBook },
  props: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>