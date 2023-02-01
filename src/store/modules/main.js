import axios from 'axios';
import store from '..';
import url from '../config/config.url';
import {cleanURL} from "../config/axiosutils";
export default{
    namespaced: true,
    state:{
        token: null,
        user: null,
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data;
        }
    },
    actions: {
          login({dispatch}, params = {}){
               let actionConfigtmp = url.main.login;
               return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
          },
    },
}
