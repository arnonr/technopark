<template>
  <div>
    <HomeProject />
    <HomeBanner />
     <HomeNews />
    <section class="section-annouce-and-video" style="padding: 0px 0 80px 0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <HomeAnnouce />
          </div>

          <div class="col-md-6">
            <HomeVideo />
          </div>
        </div>
      </div>
    </section>
    <HomeIcon />
  </div>
</template>
<script setup>
onMounted(() => {});
</script>

<style scoped>
body {
  font-family: inherit;
}
</style>
