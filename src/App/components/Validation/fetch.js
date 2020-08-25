import axios from 'axios'
import {db} from '../../../Firebase'

const fetchPayments = (state) => {
    const {setIsLoading, setToken} = state
    const run = async () => {
        const configNewToken = {
            url:`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.TOKEN_API}`
        }
        try {
            const requestNewToken = await axios(configNewToken)
            setToken(requestNewToken.data.request_token)
        } catch (error) {
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