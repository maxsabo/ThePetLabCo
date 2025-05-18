import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3010',
});

export const getProducts = async (params: {
  page?: number;
  limit?: number;
  tags?: string;
  price?: number;
  subscription?: boolean;
}) => {
  const response = await api.get('/products', { params });
  return {
    data: response.data,
    total: parseInt(response.headers['x-total-count'], 10) || response.data.length,
  };
};