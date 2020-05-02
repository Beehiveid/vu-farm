const state = () => ({
    data: [
        {
            name: "Febrinanda",
            title: "Dev",
        },
    ],
    table: {
        headers: [
            {
                text: "Name",
                align: "start",
                value: "name",
            },
            {
                text: "Title",
                value: "title",
            },
            {
                text: "Actions",
                value: "actions",
                sortable: false,
            },
        ],
    },
});
const getters = {};
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
