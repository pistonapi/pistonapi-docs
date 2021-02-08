<template>
  <div
    class="bg-gradient-to-br from-indigo-400 to-indigo-500 p-10 rounded-lg text-white"
  >
    <div
      class="font-semibold text-xl my-2 mb-6 w-14 bg-indigo-500 p-3 rounded-full"
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
export default {
  components: { IconsVideo, IconsTerminal },
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
  },
};
</script>