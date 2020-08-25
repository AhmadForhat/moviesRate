import axios from 'axios'
import {db} from '../../../Firebase'

const fetchPayments = (state) => {
    const {setMovies, setIsError, setIsLoading, page } = state
    const source = axios.CancelToken.source()
    const run = async () => {
        const email = localStorage.getItem('email')
        const query = db.collection('users').where('email', '==', email)
        const config = {
            method:'GET',
            url:`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TOKEN_API}&language=en-US&page=${page}`
        }
        try {
            const request = await axios(config)
            const snapShot = await query.get()
            let userInfo = []
            snapShot.forEach(doc => userInfo.push(doc.data()))
            localStorage.setItem('session_id',userInfo[0].session_id)
            const arrayResults = request.data.results.map(film => {
                const {id, adult, original_language, original_title, overview, popularity, release_date, title, vote_average, poster_path} = film  
                return {
                    id,
                    adult,
                    original_language,
                    original_title,
                    overview,
                    popularity,
                    release_date,
                    title,
                    vote_average,
                    posterImg: `https://image.tmdb.org/t/p/w500${poster_path}`
                }
            })
            setMovies(arrayResults)
        } catch (error) {
            setIsError(true)
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetchPayments