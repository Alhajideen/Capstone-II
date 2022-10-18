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
      const post = await axios(`https://api.tvmaze.com/shows/${id}`);
      console.log(comments);
      console.log(post);
      commentPop.innerHTML = showPop(post, comments);
    } catch (err) {
      console.log(err);
    }
  }
}
