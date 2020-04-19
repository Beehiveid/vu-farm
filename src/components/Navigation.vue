<template>
<v-list dense>
    <NavigationItem v-for="(item, index) in items" :key="index" v-bind:menu="item"></NavigationItem>
</v-list>
</template>

<script>
import NavigationItem from './NavigationItem';

export default {
    components: {
        NavigationItem
    },
    data: () => ({
        items: [{
                "icon": "mdi-view-dashboard",
                "title": "Dashboard"
            },{
                "icon": "mdi-donkey",
                "title": "Livestock"
            },{
                "icon": "mdi-face",
                "title": "Employee"
            },{
                "icon": "mdi-warehouse",
                "title": "Warehouse"
            }]
    })
}
</script>
