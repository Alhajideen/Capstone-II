import likeElement from './likeElement.js';

const loadSelfLikes = () => {
  let likedIDs = [];
  if (localStorage.getItem('likedIDs')) {
    likedIDs = JSON.parse(localStorage.getItem('likedIDs'));
  }
  likedIDs.forEach((item) => {
    likeElement(item);
  });
};

export default loadSelfLikes;