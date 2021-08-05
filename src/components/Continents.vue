<template>
  <div class="tabs is-size-7-mobile">
    <ul>
      <li
        v-for="(name, code) in continents"
        :key="code"
        :class="{ 'is-active': code == $route.params.continent }"
      >
        <router-link
          :to="{
            name: 'confs',
            params: { continent: code, country: undefined }
          }"
          >{{ name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["continents"])
  }
};
</script>
<style scoped lang="scss">
.is-active a {
  font-weight: bold;
}
</style>
