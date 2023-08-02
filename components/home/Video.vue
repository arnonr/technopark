<template>
  <div class="hr-title hr-long center">
    <h4>วิดีโอเกี่ยวกับอุทยานฯ</h4>
    <hr class="hr-primary" />
  </div>

  <div class="row">
    <div
      :class="index == 0 ? 'col-lg-12' : 'col-lg-4'"
      v-for="(it, index) in items"
      :key="index"
    >
      <div class="post-video">
        <iframe
          style="width: 100%"
          :height="index == 0 ? '285' : 'inherit'"
          :src="it.video_url"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>

  <div class="text-center mt-1">
    <a href="#" class="btn btn-rounded btn-outline"
      >วิดีโอทั้งหมด <i class="fa fa-arrow-right"></i
    ></a>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const items = await $fetch(`${runtimeConfig.public.apiBase}/video`, {
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
