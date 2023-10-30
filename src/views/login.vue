<template>
    <div>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field v-model="username" density="compact" placeholder="Email address"
                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                    Forgot login password?</a>
            </div>

            <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
            </v-card>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login">
                Log In
            </v-btn>

            <!-- <v-card-text v-if="userData">
                <div class="text-subtitle-2 text-medium-emphasis">
                    User Data:
                </div>
                <div class="text-body-2">
                    name: {{ userData.name }}
                </div>
                <div class="text-body-2">
                    email: {{ userData.email }}
                    email: {{ userData.token }}
                </div>
            </v-card-text> -->

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/to1" rel="noopener noreferrer" target="_blank">
                    ไปหน้าแสดงข้อมูล <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/store-edit" rel="noopener noreferrer" target="_blank">
                    store-edit <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/store-add" rel="noopener noreferrer" target="_blank">
                    store-add <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/test/veevalidate" rel="noopener noreferrer"
                    target="_blank">
                    veevalidate <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/to3" rel="noopener noreferrer" target="_blank">
                    To3 <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="layout" rel="noopener noreferrer" target="_blank">
                    layout <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="Bar/Topbar" rel="noopener noreferrer" target="_blank">
                    TopBar <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/Bar/Sidebar" rel="noopener noreferrer" target="_blank">
                    Sidebar <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/Bar/Footers" rel="noopener noreferrer" target="_blank">
                    Footers <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            visible: false,
            url: 'https://smartfarm-dev-api2.logisboysolutions.com/api/Auth/login',
            username: 'admin',
            password: '51234',
        };
    },
    methods: {
        async login() {
            if (this.username && this.password) {
                try {
                    const response = await axios.post(this.url, {
                        username: this.username,
                        password: this.password
                    });

                    if (response) {
                        const data = response.data.data;

                        console.log(data);

                        this.userData = data;

                        const userData = {
                            userID: data.userID,
                            userRoleID: data.userRoleID,
                            employeeCode: data.employeeCode,
                            username: data.username,
                            name: data.name,
                            surname: data.surname,
                            email: data.email,
                            positionCode: data.positionCode,
                            positionName: data.positionName,
                            token: `Bearer ${data.token}`,
                            password: data.password,
                            phoneNo: data.phoneNo,
                            expires: data.expires
                        };

                        // const encodedUserData = encodeURIComponent(JSON.stringify(userData));
                        // this.$router.push({ path: '#', query: { userData: encodedUserData } });

                        // const header = `Authorization: Bearer ${data.token}`;
                        // return axios.get(URLConstants.USER_URL, { headers: { header } });
                        const token = data.token;


                        // const encodedUserData = encodeURIComponent(JSON.stringify(userData));
                        this.$router.push({ path: `layout/${token}` });


                    } else {
                        console.log('เกิดข้อผิดพลาดในการเรียก API');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
};

</script>
