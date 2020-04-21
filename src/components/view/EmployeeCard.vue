<template>
<v-card class="mx-auto" max-width="250" tile>
    <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="teal" size="125">
                    <span class="white--text headline">CJ</span>
                </v-avatar>
            </v-col>
            <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                    <v-list-item-content>
                        <v-list-item-title class="title">{{employee.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{employee.title}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
        </v-row>
    </v-img>
</v-card>
</template>
<script>
export default {
    props:["employee"]
}
</script>
