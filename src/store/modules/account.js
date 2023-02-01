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
        statement({dispatch}, params = {}){
            let actionConfigtmp = url.account.statement;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
        editUserProfile({dispatch}, params = {}){
            let actionConfigtmp = url.account.editUserProfile;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
        saveDeposit({dispatch}, params = {}){
            let actionConfigtmp = url.account.saveDeposit;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
        saveWithdraw({dispatch}, params = {}){
            let actionConfigtmp = url.account.saveWithdraw;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
        deleteDeposit({dispatch}, params = {}){
            let actionConfigtmp = url.account.deleteDeposit;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
        saveBank({dispatch}, params = {}){
            let actionConfigtmp = url.account.saveBank;
            return dispatch('axiosGuard', cleanURL(actionConfigtmp,params), {root:true})
        },
    },
}
