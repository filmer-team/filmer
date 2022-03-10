import axios from "axios";
const API_URL = "/api/auth/";
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data.access) {
          response.data.user.accessToken = response.data.access;
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post(API_URL + "register/", {
      username,
      email,
      password
    });
  }
  getCurrentUser() {
    console.log(localStorage)
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();