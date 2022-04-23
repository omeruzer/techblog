import axios from 'axios'
const state={
    articles:[],
    article:{},
    loaded:false
}
const getters={
    getArticles(state){
        return state.articles
    },

    articleDetail(state){
        return state.article
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
    },

    async fetchArticle(context,id){
        
        await axios.get(`http://localhost:3000/api/article/${id}`)
        .then(async (result) => {
            await context.commit('fetchArticleDetail',result.data)
            console.log(result.data);

            context.state.loaded=true
        }).catch((err) => {
            console.log(err);
        });   
    }
}
const mutations={
    initArticles(state,articles){
        state.articles=articles
    },

    fetchArticleDetail(state,article){
        state.article=article
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}