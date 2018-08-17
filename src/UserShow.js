import Vue from 'vue'

Vue.component('user-show', {
    props: ['user'],
    template: `
    <tr>
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>
      <a href="#" class="btn btn-primary">Show</a>
    </td>
  </tr>
    `
})