<template>
    <div>
        <table class="table table-outline table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in List" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.firstname}}</td>
      <td>{{item.lastname}}</td>
      <td>
          <b-button variant="primary" size="small" @click="Editable(item.id)">Edit</b-button> &nbsp;
          <b-button variant="danger" size="small" @click="Deletable(item.id)">Delete</b-button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
    props : {
        List : Array,
        Editable : Function,
        Deletable : Function
    }
}
</script>