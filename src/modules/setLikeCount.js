const setLikeCount = (id, count) => {
  const likeElement = document.querySelector(`.like[id="${id}"] > span`);
  likeElement.innerHTML = `${count}`;
};

export default setLikeCount;