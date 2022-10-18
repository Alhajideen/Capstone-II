const { default: axios } = require('axios');
import showPop from './commentpop';

class Requests {
  async postComment(id, name, comment) {
    const res = await axios.post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/comments',
      {
        item_id: id,
        username: name,
        comment: comment,
      }
    );
    console.log(res);
  }
  async getComment(id) {
    try {
      const commentPop = document.querySelector('cmt-container');
      const comments = await axios(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/comments?item_id=${id}`
      );
  
    } catch (err) {
      console.log(err);
    }
  }
}
