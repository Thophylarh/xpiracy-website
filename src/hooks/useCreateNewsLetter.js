import { useContext, useState } from 'react';
import axios from 'axios';
import { APP_CONFIG } from '../config/settings';
import { AppDataContext } from '../context/AppContext';
const useCreateNewsLetter = () => {
  const { error, setError, successMessage, setSuccessMessage } =
    useContext(AppDataContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const makePostRequest = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${APP_CONFIG.BASE_URL}newsletter`,
        postData
      );
      setSuccessMessage('Email Addes Successfully to newsletter');
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, makePostRequest };
};

export default useCreateNewsLetter;
