import axios from 'axios';

const getLikes = async () => {
  const result = await axios.get(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/likes/',
  );
  return result;
};

export default getLikes;