<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloI18n/>
    <no-ssr>
     <ol-map/>
    </no-ssr>

  </div>
</template>
<script>
import HelloI18n from "@/components/HelloI18n";


export default {
  components: { HelloI18n }
};
</script>
