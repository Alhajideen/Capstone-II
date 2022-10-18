const likeElement = (id) => {
  let likedIDs = [];
  const likeElement = document.querySelector(`.like[id="${id}"] > i`);
  likeElement.classList.remove('fa-regular');
  likeElement.classList.add('fa-solid');
  likeElement.classList.add('liked');
  if (localStorage.getItem('likedIDs')) {
    likedIDs = JSON.parse(localStorage.getItem('likedIDs'));
  }
  if (!likedIDs.includes(id)) {
    likedIDs.push(id);
  }
  localStorage.setItem('likedIDs', JSON.stringify(likedIDs));
};

export default likeElement;