import axios from 'axios'

const sendToBackend = async state => {
    const {filmId, session_id, setEnviado} = state
    const config = {
        method:'POST',
        url:`https://api.themoviedb.org/3/movie/${filmId}/rating?api_key=${process.env.TOKEN_API}&session_id=${session_id}`,
        data:{
            "value": 8.5
          }
    }
	try {
        const request = await axios(config)
        setEnviado(true)
        console.log(request)
    } catch (error) {
        setEnviado(false)
        console.log(error)
    }
}

export default sendToBackend