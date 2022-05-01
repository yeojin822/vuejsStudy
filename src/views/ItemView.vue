<template>
  <div>
      <section>
         <div>
              <!-- 질문 상세 정보 -->
          <div>
              User
          </div>
          <div>
              <router-link :to="`/user/${fetchItemInfo.user}`">
                  {{fetchItemInfo.user}} 
              </router-link>
              <div>
                  {{fetchItemInfo.time_ago}}
              </div>
          </div>
          <h2>{{fetchItemInfo.title}}</h2>
         </div>

      </section>
      <section>
         <div v-html="fetchItemInfo.content">

         </div>
      </section>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['fetchItemInfo'])
    },
    created(){
         const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id) 
    }
}
</script>

<style>

</style>