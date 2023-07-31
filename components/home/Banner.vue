<template>
  <Swiper
    :slides-per-view="1"
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :loop="true"
    :effect="'creative'"
    ,
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
    <SwiperSlide v-for="it in banners" :key="it.id">
      <img :src="it.slide_file" class="img-banner" />
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
const banners = ref([
  {
    id: 1,
    name: "slide1",
    slide_file: "/images/banner/banner1.jpeg",
    url: null,
  },
  {
    id: 2,
    name: "slide2",
    slide_file: "/images/banner/banner1.jpeg",
    url: null,
  },
]);
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
