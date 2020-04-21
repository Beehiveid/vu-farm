<template>
<v-container>
    <v-row>
        <employee-card v-for="(item, index) in employees" :key="index" v-bind:employee="item" />
    </v-row>

</v-container>
</template>

<script>
import EmployeeCard from './EmployeeCard'
export default {
    components: {
        EmployeeCard
    },
    data: () => ({
        employees: [{
                title: "Developer",
                name: "Nanda"
            },
            {
                title: "Developer",
                name: "Isti Paleman"
            },
            {
                title: "Big Bossu",
                name: "Cipal"
            },
        ]
    })
}
</script>
