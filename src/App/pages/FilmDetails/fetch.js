import axios from 'axios'

const fetchPayments = (state) => {
    const { setMovieDetails, filmId, setIsLoading, setIsError } = state
    const source = axios.CancelToken.source()
    const run = async () => {
        const config = {
            method:'GET',
            url:`https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.TOKEN_API}&language=en-US`
        }
            
        try {
            const request = await axios(config)
            console.log(request.data)
            setMovieDetails(request.data)
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