import axios from 'axios'
const state={
    message:'hello',
    categories:[]
}
const getters={
    getCategories(state){
        return state.categories
    }
}
const actions={
    fetchCategory(context){
        axios.get('http://localhost:3000/api/category/all')
            .then((result) => {
                context.commit('initCategory',result.data)
            }).catch((err) => {
                console.log(err);
            });
    }
}
const mutations={
    initCategory(state,categories){
        state.categories=categories
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}