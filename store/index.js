import Vuex from 'vuex';
import { auth } from './auth.module';
import { nav } from './nav';


const createStore = () => {
    return new Vuex.Store({
        modules: {
            auth,
            nav
        }
    })

}
 export default createStore;
 
