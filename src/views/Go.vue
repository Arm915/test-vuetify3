<template>
    <div>
        <h1>เอามาแสดง</h1>
    </div>
    <v-table theme="dark" class="vTavle">
        <thead>
            <tr>
                <th class="text-left">Asset Grade Name</th>
                <th class="text-left">Grade Level</th>
                <th class="text-left">Create Date</th>
                <th class="text-left">Update Date</th>
                <th class="text-left">Update By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ listItem.assetGradeName }}</td>
                <td>{{ listItem.gradeLevel }}</td>
                <td>{{ listItem.createDate }}</td>
                <td>{{ listItem.updateDate }}</td>
                <td>{{ listItem.updateBy }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    created() {
        this.mounted();
    },
    methods: {
        mounted() {
            const data = JSON.parse(decodeURIComponent(this.$route.query.data));
            console.log(data);
            this.listItem = data;
        },
    },
};
</script>
