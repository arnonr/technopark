<template>
  <section class="section-icons" style="padding: 0px 0 80px 0">
    
    <div class="container">
      <ul class="grid grid-4-columns">
        <li v-for="(it, index) in icon" :key="index" class="text-center">
          <a h:href="it.url"><img alt="" :src="it.icon_file" /></a>
          <h4 class="mt-3">{{ it.name }}</h4>
        </li>
      </ul>
    </div>
  </section>

</template>
<script setup>
const icon = ref([
  {
    id: 1,
    name: "Green",
    icon_file: "/images/iconwebtechnopark/icon_green.png",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    name: "KM",
    icon_file: "/images/iconwebtechnopark/icon_km.png",
    url: "https://www.google.com/",
  },
  {
    id: 3,
    name: "MOU",
    icon_file: "/images/iconwebtechnopark/icon_mou.png",
    url: "https://www.google.com/",
  },
  {
    id: 4,
    name: "Standard",
    icon_file: "/images/iconwebtechnopark/icon_standard.png",
  },
]);
</script>
<style scoped>

.grid li {
    position: inherit;
}
</style>
