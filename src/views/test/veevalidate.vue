<template>
    <form @submit.prevent="submit">
        <v-text-field v-model="gradename.value.value" :error-messages="gradename.errorMessage.value"
            label="Grade Name"></v-text-field>

        <v-text-field v-model="fixedprice.value.value" :error-messages="fixedprice.errorMessage.value"
            label="Fixed Price"></v-text-field>

        <v-text-field v-model="gradelevel.value.value" :error-messages="gradelevel.errorMessage.value"
            label="Grade Level"></v-text-field>

        <!-- <v-select v-model="select.value.value" :items="items" :error-messages="select.errorMessage.value"
            label="Select"></v-select>

        <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1" label="Option"
            type="checkbox"></v-checkbox> -->

        <v-btn class="me-4" type="submit"
            :disabled="!gradename.value.value || !fixedprice.value.value || !gradelevel.value.value">
            submit
        </v-btn>

        <v-btn @click="handleReset">
            clear
        </v-btn>

        <pre>{{ state }}</pre>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        gradename(value) {
            if (value?.length >= 1) return true

            return 'Grade Name needs to be at least 1 characters.'
        },
        fixedprice(value) {
            if (/[0-9-]+/.test(value)) return true

            return 'Fixed Price needs to be number.'
        },
        gradelevel(value) {
            if (/[0-9-]+/.test(value)) return true

            return 'Grade Level needs to be number.'
        },

        // fixedprice (value) {
        //   if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        //   return 'Fixed Price number needs to be at least 9 digits.'
        // },
        // email(value) {
        //     if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        //     return 'Must be a valid e-mail.'
        // },
        // select(value) {
        //     if (value) return true

        //     return 'Select an item.'
        // },
        // checkbox(value) {
        //     if (value === '1') return true

        //     return 'Must be checked.'
        // },
    },
    computed: {
        notcomplete() {
            return this.validateText1 && this.validateNumber1 && this.validateNumber2;
        },
        validateText1() {
            return this.gradename.value.value !== null
        },
        validateNumber1() {
            return this.fixedprice.value.value !== null;
        },
        validateNumber2() {
            return this.number2 !== null;
        },
    },
})

const gradename = useField('gradename')
const fixedprice = useField('fixedprice')
const gradelevel = useField('gradelevel')
// const select = useField('select')
// const checkbox = useField('checkbox')

// const items = ref([
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
// ])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})


</script>
