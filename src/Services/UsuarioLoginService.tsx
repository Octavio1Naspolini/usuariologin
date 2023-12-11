import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://localhost:8080/usuario';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const UsuarioLoginService = {
    createUsuarioLogin(UsuarioLogin: UsuarioLogin): Promise<AxiosResponse<UsuarioLogin>> {
        return apiClient.post<UsuarioLogin>('/login', UsuarioLogin);
    },
};


export default UsuarioLoginService;

  