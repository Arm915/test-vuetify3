<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Information</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>

export default {
    data() {
        return {
            desserts: [],
        };
    },
    created() {
        this.processUserData();
    },
    methods: {
        processUserData() {
            const userData = this.$route.query.userData;
            if (userData) {
                const parsedUserData = JSON.parse(decodeURIComponent(userData));
                this.desserts = Object.entries(parsedUserData).map(([name, value]) => ({
                    name,
                    calories: value || '',
                }));
            }
        },
    },
};
</script>