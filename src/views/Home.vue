<template>
  <div class="home">
    <h1>
      Home Page
    </h1>
data : {{JSON.stringify($store.state.userprofile)}}
<!-- id: {{$store.state.userprofile[0].id}} -->

    <div>
    <MyTable
      :headers="headers"
      :rows="rows"
    />
  </div>
  </div>

</template>


<script>
import MyTable from '../components/modules/Table.vue'

export default {
    name: "Home",
  components: {
    MyTable
  },
  data() {
    return {
      headers: ['ID', 'Name', 'Email'],
      rows: [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' }
      ]
    }
  }
}
</script>