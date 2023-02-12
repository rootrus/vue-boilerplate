<template>
    <h1>Products</h1>
  <div>
          <div>
               <div>
                    Counter : {{ JSON.stringify($store.state.counter )}}
               </div>
               <button @click="$store.dispatch('increaseCounter')">+</button>
               <button @click="$store.dispatch('decreaseCounter')">-</button>
          </div>
          <div>
               <div>
                    isLoading : {{ JSON.stringify($store.state.isLoading )}}
               </div>
               <button @click="$store.dispatch('toggleLoading')">+</button>
          </div>
     </div> 
</template>

<script>
export default {
  data () {
    return { file: null }
  },  
  created () {
    this.$store.dispatch('fetch', { key: 'userprofile', url: 'success_request'});
  },
}
</script>