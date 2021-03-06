import { auth, db } from '../../../Firebase'

const sendToBackend = async state => {
    const {email, pass, name} = state
	try {
        await auth.createUserWithEmailAndPassword(email, pass)
        await db.collection('users').add({name, email})
        localStorage.setItem('isLogged',true)
        localStorage.setItem('email',email)
        window.location.replace('/')
        console.log('Usuário Criado com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

export default sendToBackend