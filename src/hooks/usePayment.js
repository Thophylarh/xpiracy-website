import { useState } from 'react';
import axios from 'axios';
import { APP_CONFIG } from '../config/settings';
const useMakePayment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const makePostRequest = async (postData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${APP_CONFIG.BASE_URL}pay`, postData);
      window.location.replace(data.payload);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, makePostRequest };
};

export default useMakePayment;
