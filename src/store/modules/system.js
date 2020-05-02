const state = () => ({
    wonderfulYear: new Date().getFullYear(),
    drawer: true,
    contentTitle: "",
    menu: [
        {
            icon: "mdi-view-dashboard",
            title: "Dashboard",
            to: "/",
        },
        {
            icon: "mdi-donkey",
            title: "Livestock",
            to: "/livestock",
        },
        {
            icon: "mdi-face",
            title: "Employee",
            to: "/employee",
        },
        {
            icon: "mdi-warehouse",
            title: "Warehouse",
            to: "/warehouse",
        },
        {
            icon: null,
            title: "FAQ",
            to: "/faq",
        },
    ],
});

const getters = {};

const mutations = {
    setContentTitle(state, val) {
        if (val == null) state.contentTitle = state.menu[0].title;
        else state.contentTitle = val;
    },
    drawerHandler(state) {
        state.drawer = !state.drawer;
    },
};

const actions = {
    setContentTitle(context, val) {
        context.commit("setContentTitle", val);
    },
    drawerHandler(context) {
        context.commit("drawerHandler");
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
