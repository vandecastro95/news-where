const axios = require('axios')

const {
        GraphQLObjectType,
        GraphQLInt, 
        GraphQLString, 
        GraphQLBoolean,
        GraphQLList,
        GraphQLSchema
     } = require('graphql');


// News Type
const NewsType = new GraphQLObjectType({
    name: 'news',
    fields: () => ({
       status: { type: GraphQLString },
       totalResults: { type: GraphQLInt },
       articles: { type: ArticleType }
    })
})

const ArticleType = new GraphQLObjectType({
    name: 'articles',
    fields: () => ({
        source: { type: SourceType },
        author: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString }, 
        url: { type: GraphQLString },
        urlToImage: { type: GraphQLString },
        publishedAt: { type: GraphQLString },
        content: { type: GraphQLString }
    })
});

const SourceType = new GraphQLObjectType({
    name: 'source',
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString }
    })
})

//ROot Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        news: {
            type: NewsType,
            resolve(parent, args) {
                return axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e62066688c40479a84649ea39b69463b')
                    .then(res => res.data)
            }   
        },
        article: {
            type: new GraphQLList(ArticleType),
            resolve(parent, args) {
                return axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e62066688c40479a84649ea39b69463b')
                    .then(res => res.data.articles)
            }
        },
        articles: {
            type: new GraphQLList(ArticleType),
            args: {
                country: { type: GraphQLString }
                },
                resolve(parent, args) {
                    return axios
                    .get(`https://newsapi.org/v2/top-headlines?country=${args.country}&apiKey=e62066688c40479a84649ea39b69463b`)
                    .then(res => res.data.articles)
                }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery });