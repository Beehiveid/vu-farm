<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
        <Navigation />
    </v-navigation-drawer>

    <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Beehive - Farm Workshop</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container>
        </v-container>
    </v-content>

    <v-footer app>
        <span>&copy; {{new Date().getFullYear()}}</span>
    </v-footer>
</v-app>
</template>

<script>
import Navigation from './Navigation'
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
