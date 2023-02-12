<template>
  <div>
    <!-- <h1>Create an event</h1> -->
  <div>
    <!-- <input type="file" ref="fileInput" @change="uploadFile"/>
    <button @click="submitFile">Upload</button> -->
  </div>
    <form>
     
      <!-- <label>Select a category</label> -->
      <!-- <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select> -->

      <!-- <h3>Name & describe your event</h3> -->

      <!-- <BaseInput  v-model="event.title"  label="Title" type="text" :options="options" />
      <BaseSelect v-model="event.title" key="" :options="options"/> -->

     <!--
     <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="password"/>

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
        <BaseInput v-model="event.pets" label="Yes" name="pets" value="1" :type="checkbox" />

      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets"/> 
        <BaseInput v-model="event.pets" label="No" name="pets" value="0"  type="radio" />
        <label>No</label> 
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.catering"  class="field"
        />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live music</label>
      </div> 

     -->
      <!-- <button type="submit">Submit</button> -->
    </form>
{{JSON.stringify(items)}}
    <!-- <pre>{{ JSON.stringify(event) }}</pre> -->
  </div>
</template>

<script>
// import BaseInput from '../components/modules/BaseInput.vue'
// import BaseSelect from '../components/modules/BaseSelect.vue'
import { mapState } from 'vuex'
// import axios from 'axios';
export default {
// components: {
//     BaseInput,
//     BaseSelect
//   },
  data () {
    return {
     //  categories: [
     //    'sustainability',
     //    'nature',
     //    'animal welfare',
     //    'housing',
     //    'education',
     //    'food',
     //    'community'
     //  ],
     //  event: {
     //    category: '',
     //    title: '',
     //    description: '',
     //    location: '',
     //    pets: 1,
     //    extras: {
     //      catering: false,
     //      music: false
     //    },
     //    attraaaa: []
     //  },
     //  options: {
     //      selectedOption: '2',
     //      data: [{ text: '', value: '' },{text: 'Justin', value: '1'}, {text: 'Jayden', value: '2'}]
     //  },
        file: null
    }
  },  
  created () {
    this.$store.dispatch('fetch', { key: 'userprofile', url: 'success_request'});
  },
  computed: mapState({
    items: state => state['userprofile']
  }),
  
     // methods: {
     //      uploadFile() {
     //           this.file = this.$refs.fileInput.files[0];
     //           console.log(this.file)
     //      },
     //      async submitFile() {
     //           const formData = new FormData();
     //           formData.append('file', this.file);
     //           try {
     //                const res = await axios.post('/server/upload', formData);
     //                console.log(res.data);
     //           } catch (err) {
     //           console.error(err);
     //           }
     //      }
     // }
}
</script>