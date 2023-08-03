<template>
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
          <td class="text-center">{{ index + 1 }}</td>
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
  <div class="text-center">
    <NuxtLink to="/annouce" class="btn btn-rounded btn-outline">
      ข่าวประกาศทั้งหมด <i class="fa fa-arrow-right"></i
    >
</NuxtLink>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const items = await $fetch(`${runtimeConfig.public.apiBase}/banner`, {
  params: {
    is_publish: 1,
  },
})
  .then((res) => {
    return res.data;
  })
  .catch((error) => error.data);
</script>

<style></style>
