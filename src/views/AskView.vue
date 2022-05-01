<template>
  <list-item></list-item>
  <!-- <div>
    <ul class="new-list">
        <li v-for="item in fetchedAsk" class="post">
          <div class="points">
            {{item.points}}
          </div>
          <div>
            <p class='new-title'>
              <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
            </p>
            <small class="link-text">
             {{item.time_ago}} 
              by
              <router-link :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
            </small>
          </div>
        </li>
      </ul>
  </div> -->
</template>

<script>
import ListItem from '../components/ListItem.vue';  
export default {
  components:{
    ListItem,
  }
}
// import {mapGetters} from 'vuex';

// export default {
//   computed:{
//     ...mapGetters(['fetchedAsk'])
//   },
  // computed : {
  //   ...mapState({
  //     ask: state => state.ask
  //   })

    // ask(){
    //   return this.$store.state.ask
    // }
  // },

//   created(){
//     this.$store.dispatch('FETCH_ASK')
//   }
// }
</script>

<style>

</style>