<template>
  <div>
    <Navbar />
    <div style="margin-top: 100px" class="container">
      <div class="card card-body">
        <h3>List of users</h3>
        <Button 
        :handleFunction="addUser" 
        buttonName="Add new user"
        variant="primary" />
        <!-- Table list -->
        <Table :Editable="onEdit" :Deletable="onDeletion" :List="sampleArray" />
      </div>
      <Modal :handleSave="onSave" :dataObject="userObject" title="Add user" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import Table from '@/components/Table/Table'
import Button from '@/components/Button/Button'
import Modal from '@/components/Modal/Modal'
import {mapActions, mapGetters} from 'vuex'
export default {
  components : {
    Navbar, Table, Button, Modal
  },
  data(){
    return { 
      sampleArray : [{id: 1, firstname : "bryan", lastname : "palad"}],
      userObject : {
        firstname : '', lastname : ''
      }
    }
  },
  computed : {
        ...mapGetters({
            getUserResponse : 'get_backend'
        })
    },
    
  methods : {
    ...mapActions({
            saveHandler : 'PUSH_USERVALUE'
        }),
    onDeletion : function(id) {
      alert(id)
    },
    onEdit : function(id) {
      alert(id)
    },
    addUser : function() {
      this.$bvModal.show('bv-modal-example')
    },
     onSave() {
            if(!this.userObject.firstname || !this.userObject.lastname) {
                alert("empty firstname or lastname please try again..");
                return false
            } else { 
                this.saveHandler({object : this.userObject})
                setTimeout(() => console.log(this.getUserResponse), 1000)
            }
        }
  }
}
</script>
