import axios from 'axios';

const getShows = async () => {
  const results = await axios('https://api.tvmaze.com/shows');
  return results;
};

export default getShows;