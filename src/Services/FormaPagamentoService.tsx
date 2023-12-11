import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://localhost:8080/formaPagamento';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const formaPagamentoService = {
    fetchFormaPagamento(): Promise<AxiosResponse<FormaPagamento[]>> {
        return apiClient.get<FormaPagamento[]>('/lista');
    },

    fetchFormaPagamentoById(id: number): Promise<AxiosResponse<FormaPagamento>> {
        return apiClient.get<FormaPagamento>(`/buscaId/${id}`);
    },

    createFormaPagamento(formaPagamento: FormaPagamento): Promise<AxiosResponse<FormaPagamento>> {
        return apiClient.post('/cadastro', formaPagamento);
    },

    deleteFormaPagamento(id: number): Promise<AxiosResponse<void>> {
        return apiClient.delete(`/excluir/${id}`);
    }
};


export default formaPagamentoService;

  