<template>
    <div>
        <b-button 
        :variant="variant"
        @click="handleFunction"
        style="float: right; margin-top: 20px; margin-bottom: 10px"
        >{{buttonName}}</b-button>
    </div>
</template>

<script>
export default {
    props : {
        handleFunction : Function,
        buttonName : String,
        variant : String
    }
}
</script>