import Token from './Token.js'
import AppStorage from './AppStorage.js'
class User {
	login(data){
		axios.post('/api/auth/login', data)
			.then(res => this.responseAfterLogin(res))
			.catch(error => error.reponse.data)
	}

	responseAfterLogin(res){
		const accessToken = res.data.access_token;
		const username = res.data.user
		if (Token.isValid(accessToken)){
			AppStorage.store(accessToken, username)
		}
	}

	hasToken(){
		const storedToken = AppStorage.getToken();
		if(storedToken){
			return Token.isValid(storedToken) ? true : false
		}
		return false
	}

	loggedIn(){
		return this.hasToken()
	}

	logout(){
		AppStorage.clear();
	}

	name(){
		if(this.loggedIn()){
			return AppStorage.getUser()
		}
	}

	id(){
		if(this.loggedIn()){
			const payload = Token.payload(AppStorage.getToken())
			return payload.sub
		}
	}
}

export default User = new User();