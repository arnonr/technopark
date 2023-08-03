<template>
  <section class="section-news">
    <div class="container">
      <div class="hr-title hr-long center">
        <h4>ประชาสัมพันธ์</h4>
        <hr class="hr-primary" />
      </div>
      <div class="">
        <table class="table table-bordered table-striped table-news-document">
          <thead>
            <tr>
              <th style="width: 5%" class="text-center">#</th>
              <th style="width: 70%">หัวข้อข่าวประกาศ</th>
              <th class="text-center">ดาวน์โหลด</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(it, index) in items" :key="it.id">
              <td class="text-center">
                {{
                  currentPage == 1
                    ? index + 1
                    : index + 1 + (currentPage - 1) * perPage
                }}
              </td>
              <td>
                <a :href="it.annouce_file" target="_blank">{{ it.title }}</a>
              </td>
              <td class="text-center">
                <a :href="it.annouce_file" target="_blank">
                  <button type="button" class="btn btn-primary btn-sm">
                    <i class="fa fa-file-pdf"></i>
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination
        :totalPage="totalPage"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const items = ref([]);
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);

const search = ref({
  is_publish: 1,
});

const fetchItems = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/annouce`, {
    params: {
      ...search.value,
      perPage: perPage.value,
      currentPage: currentPage.value,
    },
  })
    .then((res) => {
      items.value = res.data;
      totalPage.value = res.totalPage;
      totalItems.value = res.totalData;

      window.scrollTo(0, 0);
    })
    .catch((error) => error.data);
};
fetchItems();

watchEffect(fetchItems);

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// watch(currentPage, async (newQuestion, oldQuestion) => {
//   if (newQuestion.indexOf('?') > -1) {
//     answer.value = 'Thinking...'
//     try {
//       const res = await fetch('https://yesno.wtf/api')
//       answer.value = (await res.json()).answer
//     } catch (error) {
//       answer.value = 'Error! Could not reach the API. ' + error
//     }
//   }
// })
</script>

<style></style>
