<template>
  <!-- NEWS -->
  <section class="section-news">
    <div class="container">
      <nav class="grid-filter gf-creative" data-layout="#portfolio">
        <ul class="news-menu">
          <li
            v-for="(it, index) in newsType"
            :key="index"
            :class="index == 0 ? 'active ' : ''"
          >
            <a
              href="#"
              :data-category="'.' + it.category"
              :data-n-type-id="it.id"
              >{{ it.name }}</a
            >
          </li>
        </ul>
        <div class="grid-active-title">ข่าวทั้งหมด</div>
      </nav>

      <!-- News Grid -->
      <div
        id="portfolio"
        class="grid-layout portfolio-4-columns"
        data-margin="20"
        style="overflow: hidden"
      >
        <div
          v-for="(it, index) in items"
          :key="index"
          :class="
            'news-item portfolio-item img-zoom news-technopark news-all news-' +
            it.news_type.name
          "
        >
          <div class="portfolio-item-wrap">
            <!-- Post item-->
            <div class="post-item border">
              <div class="post-item-wrap">
                <div class="post-image">
                  <a href="#">
                    <img :src="it.news_file" alt="" />
                    <!-- style="height: 170px" -->
                  </a>
                </div>
                <div class="post-item-description">
                  <h2 class="head-post" style="min-height: 8em">
                    {{ it.title }}
                  </h2>
                  <div>
                    <a href=""
                      >อ่านต่อ <i class="fa fa-arrow-right news-link-view"></i
                    ></a>
                    <span class="tag-news" style="float: right">
                      <i class="fa fa-tag"></i> {{ it.news_type.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end: Post item-->
          </div>
        </div>
      </div>
      <div class="div-btn-news">
        <a href="#" class="a-news-all float-right">
          <button type="button" class="btn btn-rounded btn-outline">
            ดูข่าวทั้งหมด <span class="text-news-all"></span>
            <i class="fa fa-arrow-right"></i>
          </button>
        </a>
      </div>
      <!-- end: Portfolio -->
    </div>
  </section>
  <!-- end: NEWS -->
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();

onMounted(async () => {});

// News Type
// const { data: news_type_item } = await useFetch(
//   `${runtimeConfig.public.apiBase}/news-type`
// );

const newsType = await $fetch(`${runtimeConfig.public.apiBase}/news-type`, {
  params: {
    is_publish: 1,
  },
})
  .then((res) => {
    let d = res.data.map((e) => {
      e.category = "news-" + e.name;
      return e;
    });

    d.unshift({
      id: null,
      name: "ข่าวทั้งหมด",
      category: "news-all",
    });

    return d;
  })
  .catch((error) => error.data);

const items = await $fetch(`${runtimeConfig.public.apiBase}/news`, {
  params: {
    is_publish: 1,
  },
})
  .then((res) => {
    return res.data;
  })
  .catch((error) => error.data);
</script>
<style scoped>
.portfolio-item a:not(.btn),
.grid-item a:not(.btn) {
  color: #ff6600;
}

/* .post-item.border .post-item-wrap {
  border: 1px solid #aaaaaa;
} */

.post-item.border > .post-item-wrap > .post-item-description {
  padding: 18px !important;
}
</style>
