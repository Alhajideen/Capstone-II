import showPop from './commentpop';

const { default: axios } = require('axios');

export default class Requests {
  static async postComment(id, name, comment) {
    try {
      const res = await axios.post(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/comments',
        {
          item_id: id,
          username: name,
          comment,
        },
      );
      Requests.getComment(id);
    } catch (err) {
      console.log(err);
    }
  }

  static async getComment(id) {
    try {
      const post = await axios(`https://api.tvmaze.com/shows/${id}`);
      showPop(post.data);
    } catch (err) {
      console.log(err);
    }
  }
}
