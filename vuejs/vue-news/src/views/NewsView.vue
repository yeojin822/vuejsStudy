<template>
  <list-item></list-item>
</template>

<script>
//  import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';  
export default {
  components:{
    ListItem,
  }
  // data(){
  //   return{
  //     users:[],
  //   }
  // },
  //   console.log("호출 전: ",this)
  //   var vm = this;
  //   fetchNewsList()
  //   .then(response =>{
  //     console.log("호출 후: ",this) //비동기 통신 
  //     vm.users = response.data;
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })

}

/*
this
1. windows this
2. function this = windows this
3. 생성자 함수 instance this
4. 화살표 함수 사용시 같은 위치를 가르킨다.
*/

</script>

<style>
</style>