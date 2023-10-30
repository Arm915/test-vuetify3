<template>
  <div>
    <v-sheet class="sheet" style="display: flex; justify-content: center; align-items: center;">
      <dev class="card" variant="tonal">
        <v-card-title class="title">Asset Grade>Add</v-card-title>
        <div class="DBt1">
          <v-btn href="/" class="Bt1" variant="outlined" color="pink-darken-4">กลับหน้าแรก</v-btn>
        </div>
        <div class="Dinput1">
          <p>Asset Grade Name: <input class="ip" v-model="text1" type="text" :class="{ 'invalid': !validateText1 }"
              @input="validate"></p>
          <p>Fixed Price: <input class="ip" v-model="number1" type="number" :class="{ 'invalid': !validateNumber1 }"
              @input="validate"></p>
          <p>Grade Level: <input class="ip" v-model="number2" type="number" :class="{ 'invalid': !validateNumber2 }"
              @input="validate"></p>
          <v-btn @click="saveData" class="Bt1" variant="outlined" color="pink-darken-4"
            :disabled="!notcomplete">Save</v-btn>
        </div>
      </dev>
    </v-sheet>
  </div>
</template>

<script>
import layoutCss from '@/views/Bar/layoutCss.vue';

import axios from 'axios';

export default {
  components: {
    layoutCss,
  },
  data() {
    return {
      url: 'https://localhost:7133/api/Contacts',
      text1: undefined,
      number1: undefined,
      number2: undefined,
    };
  },
  computed: {
    notcomplete() {
      return this.validateText1 && this.validateNumber1 && this.validateNumber2 && this.number2 != null;
    },
    validateText1() {
      return this.text1 !== null
    },
    validateNumber1() {
      return this.number1 !== null;
    },
    validateNumber2() {
      return this.number2 !== null;
    },
  },
  methods: {
    validate() {
      if (this.text1 === '') {
        this.text1 = null;
      }
      if (this.number1 === '') {
        this.number1 = null;
      }
      if (this.number2 === '') {
        this.number2 = null;
      }
    },
    saveData() {
      const data = {
        assetGradeName: this.text1,
        fixedPrice: this.number1,
        gradeLevel: this.number2
      };
      axios.post(this.url, data)
        .then(response => {
          console.log(response.data);
          this.$router.push({ path: `to3` });
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
