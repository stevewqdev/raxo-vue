<template >
  <footer class="new-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-left">
          <router-link
            v-if="prev"
            data-text="Previous Project"
            class="nav-link"
            :to="'/creative-work/' + prev"
          >
            Previous Project
          </router-link>
        </div>
        <div class="col-md-6 text-right">
          <router-link
            v-if="next"
            data-text="Next Project"
            class="nav-link"
            :to="'/creative-work/' + next"
          >
            Next Project
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ProjectFooter",
  props: {
    next: String,
    prev: String
  }
};
</script>
