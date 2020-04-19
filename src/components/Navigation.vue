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
                "title": "Dashboard",
                "to": "/"
            },{
                "icon": "mdi-donkey",
                "title": "Livestock",
                "to": "/livestock"
            },{
                "icon": "mdi-face",
                "title": "Employee",
                "to": "/employee"
            },{
                "icon": "mdi-warehouse",
                "title": "Warehouse",
                "to": "/warehouse"
            },{
                "icon": null,
                "title": "FAQ",
                "to": "/faq"
            }]
    })
}
</script>
