<template>
    <div>
        <div v-if="trigger == '1'">
            <label>{{label}}</label>
            <input
                class="form-control"
                :type="type"
                :placeholder="placeholder"
                style="margin-top: 10px; margin-bottom: 10px"
                @input="$emit('input', $event.target.value)"
             />
        </div>
    </div>
</template>

<script>
export default {
    props : {
        label : String,
        type : String,
        placeholder: String,
        trigger: String
    }
}
</script>