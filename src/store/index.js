import { createStore } from "vuex";

const tarea = {
  id: null,
  valor: '',
  ratio: 0
}

export default createStore({
  state: {
    task: {...tarea},
    tasks: []
  },
  mutations: {
    insertarTarea(state, payload) {
      state.tasks.push(payload);
      state.task = {...tarea};
    },
  },
  actions: {
    insertTask({ commit }, tarea) {
      // console.log(tarea)
      commit("insertarTarea", tarea);
    },
  },
  modules: {},
});
