<template>
  <body>
    <header>
      <Topbar></Topbar>
    </header>
    <section>
      <nav :class="{ 'Maxsidebar': minmixSidebar }" @mouseover="exSidebar" @mouseleave="maxSidebar">
        <Sidebar class="sidebar"></Sidebar>
      </nav>
      <article>
        <div>
          <v-form @submit.prevent="search">
            <v-row class="">
              <v-col cols="12" sm="2" md="10">
                <v-text-field v-model="searchText" label="ค้นหาชื่อ" color="black"></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="1">
                <v-btn type="submit.prevent" color="teal" dark>ค้นหา</v-btn>
              </v-col>
              <v-col cols="12" sm="2" md="1">
                <v-btn @click="clear" color="red" dark>เคลียร์</v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-table theme="dark" class="vTavle">
            <thead>
              <tr>
                <th class="text-left">Asset Grade Name</th>
                <th class="text-left">Grade Level</th>
                <th class="text-left">Create Date</th>
                <th class="text-left">Update Date</th>
                <th class="text-left">Update By</th>
                <th class="text-left">Management</th>
              </tr>
            </thead>
            <!-- <tbody>
              <template v-for="item in listItem" :key="item.id">
                <tr v-if="item.createBy === 'admin'">
                  <td>{{ item.assetGradeCode }}</td>
                  <td>{{ item.assetGradeName }}</td>
                  <td>{{ item.createBy }}</td>
                  <td>{{ item.createDate }}</td>
                  <td>{{ item.createDateStr }}</td>
                  <td>{{ item.fixedPrice }}</td>
                  <td>{{ item.gradeLevel }}</td>
                  <td>{{ item.isActive }}</td>
                </tr>
              </template>
            </tbody> -->
            <tbody>
              <tr v-for="item in listItem" :key="item.id">
                <td>{{ item.assetGradeName }}</td>
                <td>{{ item.gradeLevel }}</td>
                <td>{{ item.createDate }}</td>
                <td>{{ item.updateDate }}</td>
                <td>{{ item.updateBy }}</td>
                <td class="line">
                  <v-switch v-model="item.isActive" color="primary"></v-switch>
                  <a :href="`/Go?data=${encodeURIComponent(JSON.stringify(item))}`"><v-icon v-model="item.isHidden"
                      :class="{ 'valid': item.isHidden }" class="iconline-iconline1" icon="mdi mdi-pencil"></v-icon></a>
                  <v-icon v-model="item.isDelete" :class="{ 'valid': !item.isDelete }" class="iconline-iconline1"
                    icon="mdi mdi-delete"></v-icon>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="text-center">
            <v-btn @click="cpage" color="red" v-model="pageNumber" class="bCN" dark>กลับ1หน้า</v-btn>
            <v-btn @click="npage" color="green" v-model="pageNumber" class="bCN" dark>ไป1หน้า</v-btn>
          </div>
          <v-btn href="/" class="Bt1" color="pink-darken-4"
            style="display: flex; margin-top: 10px dark;">กลับหน้าแรก</v-btn>
        </div>
      </article>
    </section>
    <footer>
      <Footers></Footers>
    </footer>
  </body>
</template>

<script>
import Sidebar from '@/views/Bar/Sidebar.vue';
import Topbar from '@/views/Bar/Topbar.vue';
import Footers from '@/views/Bar/Footers.vue';

import axios from 'axios';

export default {
  components: {
    Sidebar,
    Topbar,
    Footers,
  },
  data() {
    return {
      listItem: [],
      filteredItems: [],
      searchText: '',
      minmixSidebar: false,
      page: 1,
      pageNumber: 1,
      pageSize: 9,
      apiUrl: 'https://smartfarm-dev-api2.logisboysolutions.com/api/AssetGrade/Search?assetGradeCode=&assetGradeName=&isActive='
    };
  },
  created() {
    this.processUserData();
  },
  methods: {
    processUserData() {
      const token = this.$route.params.id;
      const url = `${this.apiUrl}&pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`;
      if (!!token) {
        axios
          .get(
            url,
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            console.log(response);
            this.listItem = response.data.data.listItem;
            this.filteredItems = response.data.data.listItem;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    search() {
      if (this.searchText == '') {
        this.listItem = this.filteredItems;
      } else {
        const lowercase = this.searchText.toLowerCase().trim();
        this.listItem = this.listItem.filter((item) =>
          item.assetGradeName.toLowerCase().includes(lowercase)
        );
      }
    },
    clear() {
      this.searchText = '';
      this.listItem = this.filteredItems;
    },
    exSidebar() {
      this.minmixSidebar = true;
    },
    maxSidebar() {
      this.minmixSidebar = false;
    },
    cpage() {
      if (this.pageNumber > 0) {
        this.pageNumber = this.pageNumber - 1;
        this.processUserData();
      }
    },
    npage() {
      this.pageNumber = this.pageNumber + 1;
      this.processUserData();
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #666;
  color: white;
}

nav {
  transition: 0.3s ease;
  float: left;
  width: 3.7%;
  height: 100%;
}

article {
  padding: 30px;
  width: auto;
  background-color: #f1f1f1;
  height: 100%;
}

section::after {
  content: "";
  display: table;
  clear: both;
}

footer {
  background-color: #777;
  text-align: center;
  color: white;
}

.valid {
  color: #0019fb;
}

.line {
  display: flex;
}

.iconline-iconline1 {
  margin-top: 15px;
}

.sidebar-form-container {
  display: flex;
}

.Maxsidebar {
  width: 255px;
  transition: 1s ease;
}

.text-center {
  display: flex;
  justify-content: center;
}

.bCN {
  margin-top: 1%;
  margin-left: 10px;
}
</style>
