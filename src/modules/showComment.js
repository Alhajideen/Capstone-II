import Requests from './Requests';

const showComment = (id) => {
  Requests.getComment(id);
};

export default showComment;
