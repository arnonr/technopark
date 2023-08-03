<template>
  <!-- NEWS -->
  <section class="section-news">
    <div class="container">
      <!-- Portfolio Filter -->
      <nav class="grid-filter gf-outline">
        <ul>
          <li
            :class="index == 0 ? 'menu-tab active' : 'menu-tab'"
            v-for="(it, index) in newsType"
            :key="index"
            :id="'li-' + it.id"
            style="cursor: pointer"
          >
            <a @click="onChangeNewsType(it.id)" data-category="*">{{
              it.name
            }}</a>
          </li>
        </ul>
      </nav>
      <!-- end: Portfolio Filter -->
      <!-- Portfolio -->
      <div id="portfolio" class="" data-margin="0">
        <!-- portfolio item -->
        <div class="row">
          <div class="col-lg-3" v-for="(it, index) in items" :key="index">
            <NuxtLink href="">
              <div class="card">
                <img
                  class="card-img-top img-responsive"
                  :src="it.news_file"
                  alt="Card image cap"
                />
                <div class="card-body" style="min-height: 200px">
                  <h4 style="font-size: 1.2em" class="card-title">
                    {{ it.title }}
                  </h4>
                </div>
                <div class="card-footer">
                  อ่านต่อ <i class="fa fa-arrow-right news-link-view"></i>
                  <span class="tag-news" style="float: right">
                    <i class="fa fa-tag"></i> {{ it.news_type.name }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- end: portfolio item -->
        </div>
      </div>
      <!-- end: Portfolio -->
      <div class="div-btn-news">
        <NuxtLink to="/news" class="a-news-all float-right">
          <button type="button" class="btn btn-rounded btn-outline">
            ดูข่าวทั้งหมด <span class="text-news-all"></span>
            <i class="fa fa-arrow-right"></i>
          </button>
        </NuxtLink>
      </div>
      <!-- end: Portfolio -->
    </div>
  </section>
  <!-- end: NEWS -->
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();

onMounted(async () => {});
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

const search = ref({
  news_type_id: undefined,
  is_publish: 1,
});

const items = ref([]);

const fetchItems = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/news`, {
    params: {
      ...search.value,
      perPage: 8,
      currentPage: 1,
    },
  })
    .then((res) => {
      console.log(res.data);
      items.value = res.data;
    })
    .catch((error) => error.data);
};
fetchItems();

const onChangeNewsType = async (id) => {
  newsType.forEach((el) => {
    var element = document.getElementById("li-" + el.id);
    element.classList.remove("active");
  });

  var elementActive = document.getElementById("li-" + id);
  elementActive.classList.add("active");
  search.value.news_type_id = id;
  fetchItems();
  //
};
</script>
<style scoped>
.portfolio-item a:not(.btn),
.grid-item a:not(.btn) {
  color: #ff6600;
}

.card-footer {
  border-top: none;
}
.card-footer a {
  color: #ff6600;
  text-decoration: none;
}

a:not(.btn):not(.badge):not(.btn):not([href]):not([tabindex]) {
  color: #ff6600;
  text-decoration: none;
  cursor: pointer;
}

/* .post-item.border .post-item-wrap {
    border: 1px solid #aaaaaa;
  } */

.post-item.border > .post-item-wrap > .post-item-description {
  padding: 18px !important;
}

.menu-tab > a {
  text-decoration: none;
}

.menu-tab > a:active {
  text-decoration: none;
}

.tag-news {
  color: #999;
}
</style>
