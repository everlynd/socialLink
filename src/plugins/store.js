import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        user: {
            name: 'userName',
            points: 12000,
            status: null,
            money: 500,
        },
    },
    mutations: {
        updatePoints: (state, value) => {
            state.user.points = state.user.points + value;
        },
        spend: (state, value) => {
            state.user.money = state.user.money - value;
        },
        addMoney(state, value) {
            state.user.money = state.user.money + value;
        }
    },
    actions: {
        SUM_POINTS({ commit }, value) {
            commit('updatePoints', value)
        },
        SPEND_MONEY({ commit }, value) {
            commit('spend', value)
        },
        ADD_MONEY({ commit }, value) {
            commit('addMoney', value)
        }
    },
    getters: {
        NAME: state => state.user.name,
        POINTS: state => state.user.points,
        MONEY: state => state.user.money,
    },
})


export default store