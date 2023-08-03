<template>
  <Swiper
    :slides-per-view="1"
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{
      clickable: true,
    }"
  >
    <SwiperSlide v-for="it in items" :key="it.id">
      <a :href="it.banner_url">
        <img :src="it.banner_file" class="img-banner"
      /></a>
    </SwiperSlide>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </Swiper>
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

<style scoped>
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  color: #000;
  font-size: 1.5em;
  margin-left: -3px;
  font-weight: 800;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-next:after {
  color: #000;
  font-size: 1.5em;
  margin-left: 3px;
  font-weight: 800;
}

.swiper-button-next {
  border-radius: 100% !important;
  width: 3em;
  background: #ffd8be;
  transform: scale(0.7);
  @media only screen and (max-width: 600px) {
    transform: scale(0.4);
  }
}

.swiper-button-prev {
  border-radius: 100% !important;
  width: 3em;
  margin-left: -2px;
  background: #ffd8be;
  transform: scale(0.7);
  @media only screen and (max-width: 600px) {
    transform: scale(0.4);
  }
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 0px);
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 0px);
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: #ff6600;
}
.img-banner {
  width: 100%;
}
</style>
