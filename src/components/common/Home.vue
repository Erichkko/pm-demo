<template>
<div>
  <vHeader></vHeader>
  <vSidebar></vSidebar>
</div>
</template>

<script>
  import vHeader from '../common/Header.vue'
  import vSidebar from '../common/Sidebar.vue'
    export default {
        name: "Home",
        components:{
        vHeader:vHeader,
        vSidebar:vSidebar,
      }
    }

</script>

<style scoped>

</style>
