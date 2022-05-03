<template>
    <div>
            <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
              {{title}}
            </template>
            <div class="d-block text-center">
              <!-- Content -> TextFields  -->
              <TextField 
              trigger="1"
              label="Enter firstname"
              type="text"
              placeholder="Enter your firstname"
              v-model="dataObject.firstname" />

              <TextField 
              trigger="1"
              label="Enter lastname"
              type="text"
              placeholder="Enter your lastname"
              v-model="dataObject.lastname" />
            </div>
            <Button 
            :handleFunction="handleSave" 
            buttonName="Save"
            variant="primary" />
          </b-modal>
    </div>
</template>

<script>
import TextField from '@/components/TextField/TextField'
import Button from '@/components/Button/Button'

export default {
    props : {
        title : String,
        dataObject : Object ,
        handleSave : Function
    },
    components : {
        TextField, Button
    },
    
}
</script>