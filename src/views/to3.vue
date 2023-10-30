<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">AssetGradeName</th>
        <th class="text-left">FixedPrice</th>
        <th class="text-left">GradeLevel</th>
        <th class="text-left">แก้ไข</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.id">
        <td>{{ item.assetGradeName }}</td>
        <td>{{ item.fixedPrice }}</td>
        <td>{{ item.gradeLevel }}</td>
        <td><v-icon @click="Edit(item)" v-model="item.Edit" class="iconline-iconline1" icon="mdi mdi-pencil"
            color="orange-lighten-3"></v-icon>
          <v-icon @click="deleteItem(item)" v-model="item.Delete" class="iconline-iconline1" icon="mdi mdi-delete"
            color="red"></v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-btn href="/" class="Bt1" variant="outlined" color="pink-darken-4" style="display: flex;">กลับหน้าแรก</v-btn>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      url: 'https://localhost:7133/api/Contacts',
      desserts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(this.url)
        .then(response => {
          console.log(response);
          this.desserts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteItem(item) {
      axios
        .delete(`${this.url}/${item.id}`)
        .then(response => {
          console.log(response);
          this.fetchData();
        })
        .catch(error => {
          console.error(error);
        });
    },
    Edit(item) {
      this.$router.push({ path: `store-edit`, query: { data: item.id } });
    },
  },
};
</script>
