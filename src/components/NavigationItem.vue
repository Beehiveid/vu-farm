<template>
<v-list-item link v-on:click="render">
    <v-list-item-action>
        <v-icon>{{menu.icon}}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
        <v-list-item-title>{{menu.title}}</v-list-item-title>
    </v-list-item-content>
</v-list-item>
</template>

<script>
export default {
    props: ['menu'],
    methods: {
        render() {
            this.$store.dispatch("system/setContentTitle", this.menu.title)
            this.$router.push(this.menu.to);
        }
    },
}
</script>
