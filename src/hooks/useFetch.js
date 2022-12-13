import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  const getDatas = async () => {
    try {
      const {data} = await axios.get(url);
      setResponse(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    getDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, error, response};
};

export default useFetch;
