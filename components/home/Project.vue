<template>
  <div>
    <section class="section-project">
      <div class="container">
        <div class="row">
          <ul class="grid grid-4-columns">
            <li class="text-center" v-for="(it, index) in project" :key="index">
              <a :href="it.url">
                <img :src="it.project_file" :alt="it.name" />
              </a>
              <span class="text-dark fw-bold">{{ it.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const project = ref([
  {
    name: "ศูนย์ปฏิบัติการ",
    project_file: "/images/iconwebtechnopark/center_black.png",
    url: "/images/iconwebtechnopark/center_black.png",
  },
  {
    name: "หลักสูตร",
    project_file: "/images/iconwebtechnopark/program_black.png",
    url: "/images/iconwebtechnopark/program_black.png",
  },
  {
    name: "65 ปี มจพ.",
    project_file: "/images/iconwebtechnopark/65_black.png",
    url: "/images/iconwebtechnopark/65_black.png",
  },
  {
    name: "ผลงานโดดเด่น",
    project_file: "/images/iconwebtechnopark/project_black.png",
    url: "/images/iconwebtechnopark/project_black.png",
  },
]);
</script>
