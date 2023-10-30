<template>
    <header>
        <link rel="stylesheet" href="">
    </header>
    <div>
        <Topbar></Topbar>
        <div class="searchFull">
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
                </div>
        <div class="sidebar-form-container">
            <Sidebar class="sidebar" :class="{ 'Maxsidebar': minmixSidebar }" @mouseover="exSidebar"
                @mouseleave="maxSidebar"></Sidebar>
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
                            <v-icon v-model="item.isHidden" :class="{ 'valid': item.isHidden }" class="iconline-iconline1"
                                icon="mdi mdi-pencil"></v-icon>
                            <v-icon v-model="item.isDelete" :class="{ 'valid': !item.isDelete }" class="iconline-iconline1"
                                icon="mdi mdi-delete"></v-icon>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/views/Bar/Sidebar.vue';
import Topbar from '@/views/Bar/Topbar.vue';
import axios from 'axios';

export default {
    components: {
        Sidebar,
        Topbar,
    },
    data() {
        return {
            listItem: [],
            filteredItems: [],
            searchText: '',
            minmixSidebar: false
        };
    },
    created() {
        this.processUserData();
    },
    methods: {
        processUserData() {
            const token = this.$route.params.id;
            if (!!token) {
                axios
                    .get(
                        'https://smartfarm-dev-api2.logisboysolutions.com/api/AssetGrade/Search?assetGradeCode=&assetGradeName=&isActive=&pageNumber=1&pageSize=10',
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
    },
};
</script>

<style scoped>
.vTavle{
    width: 100%;
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

.sidebar-form {
    margin-left: 200px;
}

.sidebar {
    height: 100%;
    transition: 1s ease;
}

.Maxsidebar {
    width: 250px;
    transition: 1s ease;
}

</style>
