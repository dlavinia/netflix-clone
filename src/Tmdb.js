const API_KEY = 'd9e75261990d745a2e4bc885cdad4447'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${API_KEY}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () =>{
        return[
            {
                slug: 'originals',
                title: 'Originais Lavflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendaddos para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_kay=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_kay=${API_KEY}`)
            }
        ]

        
    }
}