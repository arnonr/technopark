<template>
  <div class="pagination">
    <ul class="pagination mx-auto">
      <li class="page-item">
        <a :class="'page-link ' + prevBtnClass" @click="onChangePage('prev')"
          >Prev</a
        >
      </li>
      <li class="page-item">
        <a :class="'page-link ' + nextBtnClass" @click="onChangePage('next')"
          >Next</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps(["currentPage", "totalPage"]);
const emit = defineEmits(["update:currentPage"]);
const prevBtnClass = ref("");
const nextBtnClass = ref("");

if (props.currentPage == 1) {
  prevBtnClass.value = "page-link-disabled";
} else {
  prevBtnClass.value = "";
}
if (props.currentPage == props.totalPage) {
  nextBtnClass.value = "page-link-disabled";
} else {
  nextBtnClass.value = "";
}

watch(
  () => [props.currentPage, props.totalPage],
  ([newsCurrentPage, newTotalPage]) => {
    if (newsCurrentPage == 1) {
      prevBtnClass.value = "page-link-disabled";
    } else {
      prevBtnClass.value = "";
    }
    if (newsCurrentPage == newTotalPage) {
      nextBtnClass.value = "page-link-disabled";
    } else {
      nextBtnClass.value = "";
    }
  }
);

const onChangePage = (type) => {
  if (type == "prev" && props.currentPage != 1) {
    emit("update:currentPage", props.currentPage - 1);
  }

  if (type == "next" && props.currentPage <= props.totalPage - 1) {
    emit("update:currentPage", props.currentPage + 1);
  }
};
</script>

<style>
.page-item {
  cursor: pointer;
}

.page-link-disabled {
  background-color: #ccc !important;
  cursor: default;
}
</style>
