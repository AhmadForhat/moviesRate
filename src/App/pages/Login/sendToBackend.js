import { auth } from '../../../Firebase'

const sendToBackend = async state => {
    const {login:email, pass} = state
	try {
        await auth.signInWithEmailAndPassword(email, pass)
        localStorage.setItem('isLogged',true)
        localStorage.setItem('email',email)
        window.location.replace('/')
        console.log('Usuário Criado com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

export default sendToBackend