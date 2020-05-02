<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
            <navigation-item v-for="(item, index) in items" :key="index" v-bind:menu="item"></navigation-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawerHandler" />
        <v-toolbar-title>Beehive - Farm Workshop</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container>
            <v-row>
                <v-col>
                    <h3>{{ title }}</h3>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <router-view></router-view>
        </v-container>
    </v-content>

    <v-footer app>
        <span>&copy; {{ wonderfulYear }}</span>
    </v-footer>
</v-app>
</template>

<script>
import NavigationItem from "./components/NavigationItem";
export default {
    components: {
        NavigationItem,
    },
    computed: {
        title() {
            return this.$store.state.system.contentTitle
        },
        items() {
            return this.$store.state.system.menu
        },
        drawer() {
            return this.$store.state.system.drawer
        },
        wonderfulYear() {
            return this.$store.state.system.wonderfulYear
        }
    },
    methods: {
        drawerHandler() {
            this.$store.dispatch("system/drawerHandler")
        }
    },
    created() {
        (this.$vuetify.theme.dark = false), this.$router.push("/");
        this.$store.dispatch("system/setContentTitle")
    },
};
</script>
