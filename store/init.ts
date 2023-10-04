
interface initInterface {
    routeLoading:boolean;
}


export const useInit = defineStore('init', {
    state: () :initInterface => ({ 
        routeLoading: false,
    }),
    getters: {},
    actions: {}
})