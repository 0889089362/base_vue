import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import router from '@/router';

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        console.log(process.env.VUE_APP_API_URL)
        Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
        let token = JwtService.getToken()
        if (token) {
            Vue.axios.defaults.headers.common[
                "Authorization"
                ] = `Bearer ${JwtService.getToken()}`;
        }
    },

    /**
     * Set the default HTTP request headers
     */
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Token ${JwtService.getToken()}`;
    },

    query(resource, params) {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.get(`${resource}`, {params}).then((data) => {
                this.handleResponse(data);
                resolve(data);
            })
            .catch(error => {
                // console.log(error);
                throw new Error(`[KT] ApiService ${error}`);
            });
        });
    },

    /**
     * Send the GET HTTP request
     * @param resource
     * @param slug
     * @returns {*}
     */
    get(resource, slug = "") {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.get(`${resource}/${slug}`).then((response) => {
                console.log(response);
                this.handleResponse(response);
                resolve(response);
            }).catch(error => {
                throw new Error(`[KT] ApiService ${error}`);
            });
        });
    },

    /**
     * Set the POST HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    post(resource, params, config = null) {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.post(`${resource}`, params, config).then((data) => {
                this.handleResponse(data);
                resolve(data);
                console.log('service', data.data)
            }).catch(error => {
                throw new Error(`[KT] ApiService ${error}`);
            });
        });
    },

    /**
     * Send the UPDATE HTTP request
     * @param resource
     * @param slug
     * @param params
     * @returns {IDBRequest<IDBValidKey> | Promise<void>}
     */
    update(resource, slug, params) {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.put(`${resource}/${slug}`, params).then((data) => {
                this.handleResponse(data);
                resolve(data);
            }).catch(error => {
                throw new Error(`[KT] ApiService ${error}`);
            });
        });
    },

    /**
     * Send the PUT HTTP request
     * @param resource
     * @param params
     * @returns {IDBRequest<IDBValidKey> | Promise<void>}
     */
    put(resource, params) {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.put(`${resource}`, params).then(({data}) => {
                this.handleResponse(data);
                resolve(data)
            }).catch(error => {
                throw new Error(`[KT] ApiService ${error}`);
            });
        });
    },

    /**
     * Send the DELETE HTTP request
     * @param resource
     * @returns {*}
     */
    delete(resource, param) {
        this.setHeader();
        return new Promise(resolve => { 
            Vue.axios.delete(`${resource}/${param}`).then(({data}) => {
                this.handleResponse(data);
                resolve(data);
            }).catch(error => {
                // console.log(error);
                throw new Error(`[RWV] ApiService ${error}`);
            });
        });
    },


    patch(resource, params) {
        this.setHeader();
        return new Promise(resolve => {
            Vue.axios.patch(`${resource}`, params).then(({data}) => {
                this.handleResponse(data);
                resolve(data);
            }).catch(error => {
                // console.log(error);
                throw new Error(`[RWV] ApiService ${error}`);
            });
        });
    },

    handleResponse(data) {
        if (data && data.data 
            && !data.data.status && data.data.errorCode == 401) {
            router.push({ name: "login" });
        }
    }
};

export default ApiService;
