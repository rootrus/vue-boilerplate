import { createStore } from "vuex";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const makeApiRequest = async (method, url, data, isFile = false) => {
  try {
    let response;
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    if (isFile) {
      config.headers = { "Content-Type": "multipart/form-data" };
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      response = await api({
        method,
        url,
        data: formData,
        config,
      });
    } else {
      response = await api({
        method,
        url,
        data,
        config,
      });
    }

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const handleError = (errorData) => {
  console.log(errorData.error_message);
};

const errorMessageMap = {
  400: "The request was malformed or invalid, and the server cannot process it.",
  401: "Unauthorized, please login",
  403: "Forbidden Access",
  404: "Not Found",
  409: "Already Exist",
};

const catchError = (error) => {
  const message = errorMessageMap[error.response.status] || "An error occurred, please try again later";
  alert(message);
  throw error;
};

export default createStore({
  state: {
    user: {},
    isLoading: false,
    counter: 0,
  },
  mutations: {
    setData(state, { key, data }) {
      state[key] = data.data !== undefined ? data.data : data;
      console.log(state);
    },
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async fetch({ commit }, {url, key}) {
      try {
        const response = await makeApiRequest('GET', `/${url}`)
        if (response.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response)
        }
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async fetchData({ commit }, {url, key, data, id}) {
      try {
        const response = await makeApiRequest('GET', `/${url}/${id}`)
        if (response.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response);
        }
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async createData({ commit }, {url, key, data, id}) {
      try {
        const response = await makeApiRequest('POST', '/data', payload)
        if (response.data.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response);
        }   
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async updateData({ commit }, {url, key, data, id}) {
      try {
        const response = await makeApiRequest('PUT', `/${data}/${id}`, data)
        if (response.data.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response);
        }   
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async createData({ commit }, {url, key, data, id}) {
      try {
        const response = await makeApiRequest('POST', `/${data}`, data)
        if (response.data.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response);
        }   
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async deleteData({ commit }, {url, key, data, id}) {
      try {
        const response = await makeApiRequest('DELETE', `/${data}/${id}`, data)
        if (response.data.success) {
          commit('setData', {key, data:response.data });
        } else {
          handleError(response);
        }   
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async uploadFile({ commit }, {url, key, data, id}) {
      try {
        const data = await makeApiRequest('POST', `${url}`, data, true)
        commit('setFileData', data)
      } catch (error) {
        catchError(error);
        console.error(error)
      }
    },

    async increaseCounter({ commit }) {
      commit('increaseCounter');
    },

    async decreaseCounter({ commit }) {
      commit('decreaseCounter');
    },

    async toggleLoading({ commit }) {
      commit('toggleLoading');
    },

  }
});
