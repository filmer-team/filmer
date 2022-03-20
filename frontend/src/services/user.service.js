import axios from 'axios';
import authHeader from './auth-header';
import MovieService from "./movie.service";

const API_URL = "/api/";

class UserService {
    async getAuthTest() {
        return (await axios.get(API_URL + 'auth_test', {headers: authHeader()}).catch(e => {
            return ({data: "failed"})
        })).data;
    }

    async createReaction(movie_id, like, seen = false) {
        await axios.post(API_URL + "reaction/", {movie_id, like, seen}, {headers: authHeader()})
    }

    async getReactions(){
        return ((await axios.get(API_URL + "reaction/", {headers: authHeader()})).data);
    }
}

export default new UserService();
