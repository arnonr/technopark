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
        <tr v-for="(it, index) in annouce" :key="it.id">
          <td class="text-center">{{ index + 1 }}</td>
          <td>
            <a
              :href="it.annouce_file"
              target="_blank"
              >{{ it.title }}</a
            >
          </td>
          <td class="text-center">
            <a
              :href="it.annouce_file"
              target="_blank"
            >
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
    <a href="#" class="btn btn-rounded btn-outline"
      >ข่าวประกาศทั้งหมด <i class="fa fa-arrow-right"></i
    ></a>
  </div>
</template>

<script setup>
const annouce = ref([
  {
    id: 1,
    title: "ประกาศ TOR งาน..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 2,
    title: "ประกาศ TOR งาน2..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 3,
    title: "ประกาศ TOR งาน2..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 4,
    title: "ประกาศ TOR งาน2..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 5,
    title: "ประกาศ TOR งาน2..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 6,
    title: "ประกาศ TOR งาน2..........",
    annouce_file:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
]);
</script>

<style></style>
