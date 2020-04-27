<template>
<v-container>
    <v-row>
        <template>
            <v-data-table :search="search" :headers="headers" :items="livestocks" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.type" label="Type"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
            </v-data-table>
        </template>
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {

    },
    data: () => ({
        dialog: false,
        search: '',
        livestocks: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            type: ''
        },
        defaultItem: {
            name: '',
            type: ''
        },
        headers: [{
                text: 'Name',
                align: 'start',
                value: 'name',
            },
            {
                text: 'Type',
                value: 'type'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ]
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.livestocks = [{
                    name: "cow-0001",
                    type: "Cow"
                },
                {
                    name: "chicken-0001",
                    type: "Chicken"
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.livestocks.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.livestocks.indexOf(item)
            confirm('Are you sure you want to delete this livestock?') && this.livestocks.splice(index, 1)
        },

        close() {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.livestocks[this.editedIndex], this.editedItem)
            } else {
                this.livestocks.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
