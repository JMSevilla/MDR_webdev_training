<template>
  <div>
    <Navbar />
    <div style="margin-top: 100px" class="container">
      <div class="card card-body">
        <h3>Users List</h3>
        <Table 
          :List="listonArray"
          :Editable="handleEdit"
          :Deletable="handleDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar'
import Table from '@/components/Table/Table'
export default {
  components: {
    Navbar, Table
  },
  data(){
    return{
      listonArray : [{id: 1, firstname: "bryan", lastname: "palad"}]
    }
  },
  methods : {
    handleEdit: function(id) {
      alert(id)
    },
    handleDelete: function(id) {
      alert(id)
    }
  }
}
</script>
