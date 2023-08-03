<template>
  <!-- NEWS -->
  <section id="page-content">
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
                <NuxtLink href=""
                  >อ่านต่อ <i class="fa fa-arrow-right news-link-view"></i
                ></NuxtLink>
                <span class="tag-news" style="float: right">
                  <i class="fa fa-tag"></i> {{ it.news_type.name }}
                </span>
              </div>
            </div>
          </div>
          <!-- end: portfolio item -->
        </div>
      </div>
      <!-- end: Portfolio -->

      <div class="row">
        <div class="col-lg-12">
          <span class="text-sm text-disabled">
            Showing {{ currentPage }} to {{ totalPage }} of
            {{ totalItems }} entries
          </span>
        </div>
      </div>

      <Pagination
        :totalPage="totalPage"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />
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

const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);

const search = ref({
  news_type_id: undefined,
  is_publish: 1,
});

const fetchItems = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/news`, {
    params: {
      ...search.value,
      perPage: perPage.value,
      currentPage: currentPage.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      items.value = res.data;

      totalPage.value = res.totalPage;
      totalItems.value = res.totalData;

      window.scrollTo(0, 0);
    })
    .catch((error) => error.data);
};
fetchItems();

// const pagination = (() => {
//     totalItems.value/
// })

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

watchEffect(fetchItems);

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});
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

/* .post-item.border .post-item-wrap {
    border: 1px solid #aaaaaa;
  } */

a:not(.btn):not(.badge):not(.btn):not([href]):not([tabindex]) {
  color: #ff6600;
  text-decoration: none;
  cursor: pointer;
}

.post-item.border > .post-item-wrap > .post-item-description {
  padding: 18px !important;
}

.menu-tab > a {
  text-decoration: none;
}

.menu-tab > a:active {
  text-decoration: none;
}
</style>
