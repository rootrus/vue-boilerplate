import axios from 'axios'

export default {
  data() {
    return {
      data: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.data = response.data
      } catch (error) {
        console.error(error)
      }
    },
  },
  created() {
    this.fetchData()
  },
}
