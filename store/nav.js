
    export const nav = {
        state: {
            sideBarOpen: false
        },
        getters: {
            sideBarOpen: state => {
                return state.sideBarOpen
            }
        },
        mutations: {
            toggleSidebar (state) {
                state.sideBarOpen = !state.sideBarOpen
            }
        },
        actions: {
            toggleSidebar(context) {
                context.commit('toggleSidebar')
            }
        }
    }