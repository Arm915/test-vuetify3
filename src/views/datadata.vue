<template>
  <div>
    <input v-model="res.email" />
  </div>
  <!-- <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">name</th>
          <th class="text-left">information</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.information }}</td>
        </tr>
      </tbody>
    </v-table> -->
</template>

<script>
import axios from "axios";
import { ref } from 'vue';

export default {
  setup() {
    const res = ref({})
    return {
      res
      //   data: "",
      //   desserts: [],
    };
  },
  mounted() {
    axios
      .post("https://smartfarm-dev-api2.logisboysolutions.com/api/Auth/login", {
        Username: "admin",
        Password: "51234",
      })
      .then((response) => {
        this.res = response.data.data
        // response.data.resolve("Success").then(
        //   (value) => {
        //     this.data = value;
        //     console.log(value);
        //   },
        //   (reason) => {
        //     // not called
        //   }
        // );
        // this.data = JSON.parse(aaa);
        // console.log(response);
        console.log(response.data.data);
      });
  },
  // const apiResponse = {
  //   success: true,
  //   message: '',
  //   data: {
  //     email: '',
  //     employeeCode: '',
  //     expires: '',
  //     name: '',
  //     password: '',
  //     phoneNo: '',
  //     positionCode: '',
  //     positionName: '',
  //     surname: null,
  //     token: '',
  //     userID: '',
  //     userRoleID: '',
  //     username: '',
  //   },

  // this.desserts = [
  //   {
  //     name: 'email',
  //     information: apiResponse.data.email,
  //   },
  //   {
  //     name: 'employeeCode',
  //     information: apiResponse.data.employeeCode,
  //   },
  //   {
  //     name: 'expires',
  //     information: apiResponse.data.expires,
  //   },
  //   {
  //     name: 'name',
  //     information: apiResponse.data.name,
  //   },
  //   {
  //     name: 'password',
  //     information: apiResponse.data.password,
  //   },
  //   {
  //     name: 'phoneNo',
  //     information: apiResponse.data.phoneNo,
  //   },
  //   {
  //     name: 'positionCode',
  //     information: apiResponse.data.positionCode,
  //   },
  //   {
  //     name: 'positionName',
  //     information: apiResponse.data.positionName,
  //   },
  //   {
  //     name: 'surname',
  //     information: apiResponse.data.surname,
  //   },
  //   {
  //     name: 'token',
  //     information: apiResponse.data.token,
  //   },
  //   {
  //     name: 'userID',
  //     information: apiResponse.data.userID,
  //   },
  //   {
  //     name: 'userRoleID',
  //     information: apiResponse.data.userRoleID,
  //   },
  //   {
  //     name: 'username',
  //     information: apiResponse.data.username,
  //   },
  // ];
};
</script>
