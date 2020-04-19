<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
        <Navigation />
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Beehive - Farm Workshop</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-content>

    <v-footer app>
        <span>&copy; {{new Date().getFullYear()}}</span>
    </v-footer>
</v-app>
</template>

<script>
import Navigation from './components/Navigation'
export default {
    components: {
        Navigation
    },
    data: () => ({
        drawer: true,
    }),
    created() {
        this.$vuetify.theme.dark = true
    },
}
</script>
