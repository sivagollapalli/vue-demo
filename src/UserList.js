import Vue from 'vue'
import UserShow from "./UserShow.js"

export default Vue.component('user-list', {
  name: 'user-list',
  data () {
    return {
      users: []
    }
  },
  created() {
    Vue.axios.get(`http://localhost:3000/users`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  template: `
    <table class="table">
        <tr>
          <th>Id'</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <user-show v-for="user in users" v-bind:user="user" v-bind:key="user.id"></user-show>
    </table>`
})