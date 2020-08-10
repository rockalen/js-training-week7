<template>
  <div class="static-sub-menu container-fluid mb-4 mb-md-7 d-none d-md-block" id="staticSubMenu">
      <ul class="nav sub-menu-item text-capitalize container" id="sub-menu-item">
        <li v-for="(item, index) in classMenu" :key="index" class="nav-item border-0 font-size-16 font-size-md-24 my-3">
            <a v-bind:href="item.link" class="font-weight-bold nav-link p-0"
             :class="activeClass == index ? 'text-main':''" @click="getItem(index)">
          {{ item.name }}<sup>{{item.number}}</sup></a>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'ClassMenu',
  data () {
    return {
      activeClass: 0,
      classMenu: [
        { name: '全部', number: 12, link: '#/products' },
        { name: '手做陶器', number: 5, link: '#/products' },
        { name: '木做小物', number: 2, link: '#/' },
        { name: '多元素文創', number: 1, link: '#/' },
        { name: '其他', number: 1, link: '#/' }
      ]
    }
  },
  methods: {
    getItem (index) {
      this.activeClass = index // 把当前點擊元素的index，赋值给activeClass
      // console.log(this.activeClass)
    }
  }
}
</script>
