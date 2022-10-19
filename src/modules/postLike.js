import axios from 'axios';

const postLike = async (ID) => {
  const result = await axios.post(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/likes/',
    {
      item_id: ID,
    },
  );
  
  return result;
};

export default postLike;