import axios from 'axios'
const state={
    categories:[],
    category:{},
    loaded:false
}
const getters={
    getCategories(state){
        return state.categories
    },
    getCategory(state){
        return state.category
    },
}
const actions={
    fetchCategory(context){
        axios.get('http://localhost:3000/api/category/all')
            .then((result) => {
                context.commit('initCategory',result.data)
            }).catch((err) => {
                console.log(err);
            });
    },
    async getCategory(context,id){
        await axios.get(`http://localhost:3000/api/category/${id}`)
            .then(async (result) => {
                await context.commit('getCategory',result.data)

                context.state.loaded=true   

            }).catch((err) => {
                console.log(err);
            });
    }
}
const mutations={
    initCategory(state,categories){
        state.categories=categories
    },
    getCategory(state,category){
        state.category=category
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}