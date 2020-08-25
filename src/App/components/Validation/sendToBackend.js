import axios from 'axios'
import {db} from '../../../Firebase'

const sentToBackend = async state => {
    const { token, setPassSession, setSession, setRedirect } = state
    const configNewSession = {
        method:'POST',
        url:`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.TOKEN_API}`,
        data:{
            "request_token": token
          }
    }
    const email = localStorage.getItem('email')
    const query = db.collection('users').where('email', '==', email)
	try {
        const id = []
        const snapshot = await query.get()
        snapshot.forEach(doc => id.push(doc.id))
        const requestNewSession = await axios(configNewSession)
        console.log(requestNewSession.data.session_id)
        await db.collection('users').doc(id[0]).update({session_id:requestNewSession.data.session_id})
        setSession(requestNewSession.data.session_id)
        setPassSession(true)
        window.location.replace('/')
    } catch (error) {
        console.log(error)
        setRedirect(false)
    }
}

export default sentToBackend