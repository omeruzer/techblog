import axios from 'axios'
const state={
    articles:[]
}
const getters={
    getArticles(state){
        return state.articles
    }   
}
const actions={
    fetchArticles(context){
        axios.get('http://localhost:3000/api/article/all')
            .then((result) => {
                context.commit('initArticles',result.data)
            }).catch((err) => {
                console.log(err);
            });
    }
}
const mutations={
    initArticles(state,articles){
        state.articles=articles
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}