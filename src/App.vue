<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
            <navigation-item @clicked="onNavigationClicked" v-for="(item, index) in items" :key="index" v-bind:menu="item"></navigation-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Beehive - Farm Workshop</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container>
            <v-row>
                <v-col>
                    <h3>{{title}} - {{clicked}}</h3>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <router-view></router-view>
        </v-container>
    </v-content>

    <v-footer app>
        <span>&copy; {{new Date().getFullYear()}}</span>
    </v-footer>
</v-app>
</template>

<script>
import NavigationItem from './components/NavigationItem'
export default {
    components: {
        NavigationItem
    },
    data: () => ({
        drawer: true,
        title: "Dashboard",
        items: [{
            "icon": "mdi-view-dashboard",
            "title": "Dashboard",
            "to": "/"
        }, {
            "icon": "mdi-donkey",
            "title": "Livestock",
            "to": "/livestock"
        }, {
            "icon": "mdi-face",
            "title": "Employee",
            "to": "/employee"
        }, {
            "icon": "mdi-warehouse",
            "title": "Warehouse",
            "to": "/warehouse"
        }, {
            "icon": null,
            "title": "FAQ",
            "to": "/faq"
        }]
    }),
    computed:{
        clicked(){
            return this.$store.state.count;
        }
    },
    methods: {
        onNavigationClicked(value) {
            this.title = value;

            if(value == "FAQ"){
                this.$store.dispatch("substract");
            }else{
                this.$store.dispatch("add");
            }
        }
    },
    created() {
        this.$vuetify.theme.dark = false,
        this.$router.push("/");
    },
}
</script>
