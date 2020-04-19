<template>
<v-list-item link v-on:click="render(menu.to)">
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
        render(to) {
            this.$router.push(to);
        }
    },
}
</script>
