<template>
    <nav aria-label="Page navigation">
          <ul class="pagination font-size-24  justify-content-center">
            <li
              class="page-item mx-0"
              :class="{'disabled': pages.current_page === 1}"
            >
              <a
                class="page-link border-0"
                href="#"
                aria-label="Previous"
                @click.prevent="emitPages(pages.current_page - 1)"
              >
                <!-- <span aria-hidden="true">&laquo;</span> -->
                <span aria-hidden="true" class="material-icons align-middle">
                  navigate_before
                </span>
              </a>
            </li>
            <li
              v-for="(item, index) in pages.total_pages"
              :key="index"
              class="page-item mx-0"
              :class="{'active': item === pages.current_page,
              'font-weight-bold': item === pages.current_page}"
            >
              <a
                class="page-link border-0"
                href="#"
                @click.prevent="emitPages(item)"
              >
              <u v-if="item === pages.current_page">{{ item }}</u>
              <span v-else>{{ item }}</span>
              </a>
            </li>
            <li
              class="page-item mx-0"
              :class="{'disabled': pages.current_page === pages.total_pages}"
            >
              <a
                class="page-link border-0"
                href="#"
                aria-label="Next"
                @click.prevent="emitPages(pages.current_page + 1)"
              >
                <!-- <span aria-hidden="true">&raquo;</span> -->
                <span aria-hidden="true" class="material-icons align-middle">
                  navigate_next
                </span>
              </a>
            </li>
          </ul>
        </nav>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
    }
  },
  props: {
    pages: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  methods: {
    emitPages (item) {
      this.$emit('emit-pages', item)
    }
  }
}
</script>

<style lang="scss">
.page-item.active .page-link {
    background-color: #fff;
    color: #0E8A00;
}
.page-link:focus {
      box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
}
</style>
