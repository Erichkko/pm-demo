<template>
<div>
  <vHeader></vHeader>
  <vSidebar></vSidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <v-tags></v-tags>
    <div class="content">
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
  import vHeader from '../common/Header.vue'
  import vSidebar from '../common/Sidebar.vue'
  import vTags from '../common/Tags.vue'
  import bus from './bus';
    export default {
        name: "Home",
        data(){return{
          collapse:false
      }
      },
        components:{
        vHeader:vHeader,
        vSidebar:vSidebar,
        vTags:vTags,
      }
      ,
      created(){
        bus.$on('collapse', msg => {
          this.collapse = msg;
        })
      }
    }

</script>

<style scoped>

</style>
