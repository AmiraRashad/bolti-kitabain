import jwtDecode from 'jwt-decode';
import Generic from './Generic';

class UserService extends Generic {
	login = (email, password) =>
		new Promise((resolve, reject) => {
			this.post('users/login', { email, password })
				.then((token) => {
					localStorage.setItem('token', token);
					resolve(token);
				})
				.catch((err) => {
					reject(err);
				});
		});

	register = (name, email, password) =>
		this.post('users/register', { password, email, name });

	logout = () => {
		localStorage.removeItem('token');
	};

	isLoggedin = () => !!localStorage.getItem('token');

	getLoggedinUser = () => {
		try {
			const jwt = localStorage.getItem('token');
			return jwtDecode(jwt);
		} catch (ex) {
			return null;
		}
	};

	isAdmin = () => {
		if (this.isLoggedin()) {
			if (this.getLoggedinUser().role === 'admin') return true;
			return false;
		}
		return false;
	};
}

const userService = new UserService();
export default userService;
