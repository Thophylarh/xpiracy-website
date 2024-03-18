import { useState } from 'react';
import axios from 'axios';
import { APP_CONFIG } from '../config/settings';
const useCreateAccount = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const makePostRequest = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(APP_CONFIG.BASE_URL, postData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, makePostRequest };
};

export default useCreateAccount;
