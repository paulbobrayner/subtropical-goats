import axios from 'axios';

const base = process.env.BASE_URL;

export const getProduct = async (productId) => {
  const { data } = await axios.get(`${base}product/${productId}`);
  return data;
};

export const getReviews = async (productId) => {
  const { data } = await axios.get(`${base}/reviews/${productId}`);
  return data;
};
