<template>
  <!-- NEWS -->
  <section id="page-content">
    <div class="container" v-if="item">
      <div class="breadcrumb">
        <NuxtLink to="/news">หน้าหลักข่าว</NuxtLink><span> > เนื้อหาข่าว</span>
      </div>
      <div class="div-img-cover">
        <img :src="item.news_file" alt="" class="img-cover" />
      </div>
      <h3 class="text-center mt-5">{{ item.title }}</h3>

      <div class="views-tag-share">
        <span> <i class="fa fa-eye"></i> {{ item.count_views }} ผู้เข้าชม</span>
        <span style="margin-left: 1em">
          <i class="fa fa-tag"></i> {{ item.news_type.name }}</span
        >
        <span style="margin-left: 1em">
          <i class="fa fa-calendar"></i>
          {{ dayjs(item.created_news).locale("th").format("DD MMM BB") }}
        </span>
      </div>
      <hr />
      <div v-html="item.detail" class="mt-3" style="text-align: justify"></div>

      <client-only placeholder="Loading...">
        <!-- this component will only be rendered on client-side -->
        <!-- Gallery -->
      </client-only>
    </div>
  </section>
  <!-- end: NEWS -->
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

onMounted(async () => {});
const item = ref(null);

const fetchItem = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/news/${route.params.id}`)
    .then((res) => {
      item.value = res.data;

      window.scrollTo(0, 0);
    })
    .catch((error) => error.data);
};
fetchItem();
</script>
<style scoped>
.img-cover {
  width: 100%;
}

.views-tag-share {
  color: #999;
}

.breadcrumb {
  color: #999;
}
</style>
