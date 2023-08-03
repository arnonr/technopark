<template>
  <!-- NEWS -->
  <section id="page-content">
    <div class="container">
      <h3 class="text-center">{{ item.title }}</h3>
      <div v-html="item.detail"></div>
    </div>
  </section>

  <!-- end: NEWS -->
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

onMounted(async () => {});
const item = ref({});

const fetchItem = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/about/${route.params.id}`)
    .then((res) => {
      item.value = res.data;

      window.scrollTo(0, 0);
    })
    .catch((error) => error.data);
};
fetchItem();
</script>
<style scoped></style>
