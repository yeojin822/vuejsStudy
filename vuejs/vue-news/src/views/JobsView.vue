<template>
<list-item></list-item>
   <!--<div>

     <ul class="new-list">
        <li v-for="item in this.$store.state.jobs" class="post">
          <div class="points">
            {{item.points || 0}}
          </div>
          <div>
            <p class='new-title'>
               <a :href="item.url">{{item.title}}</a> 
            </p>
            <small class="link-text">
                 <router-link :to="'/user/'+item.user">{{item.user}}</router-link> 
                 <router-link :to="`/user/${item.user}`">{{item.user}}</router-link> 
              by
              {{item.time_ago}}, {{item.domain}}
            </small>
          </div>
        </li>
      </ul> 
  </div>-->
</template>

<script>
import ListItem from '../components/ListItem.vue';  
export default {
  components:{
    ListItem,
  }
}
// export default {
  
  // data(){
  //   return{
  //     jobs:[],
  //   }
  // },
  // created(){
  //  this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList()
    // .then(response => this.jobs = response.data)
    // .catch(error => console.log(error));
  // }
// }

</script>

<style >
</style>