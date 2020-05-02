const state = () => ({
    data: [
        {
            name: "chicken-0001",
            type: "chicken",
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
                text: "Type",
                value: "type",
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
