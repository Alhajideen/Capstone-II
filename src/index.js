import getShows from './modules/getShows.js';
import displayItems from './modules/displayItems.js';
import getLikes from './modules/getLikes.js';
import loadSelfLikes from './modules/loadSelfLikes.js';
import setLikeCount from './modules/setLikeCount.js';
import './desktop.css';
import './style.css';

const showContainer = document.getElementById('showList');
const numberOfShows = document.getElementById('numberOfShows');

let numberOfItems = 0;
let showArray = [];
const showsResult = getShows();
showsResult.then((value) => {
  showArray = value.data;
  displayItems(numberOfItems, numberOfItems + 12, showContainer, showArray);
  numberOfItems += 12;
  numberOfShows.innerHTML = `(${value.data.length})`;
  loadSelfLikes();
}).catch((err) => {
  console.erro(err);
});

const loadMoreBtn = document.getElementById('loadMore');
const loadMore = () => {
  displayItems(numberOfItems, numberOfItems + 8, showContainer, showArray);
  numberOfItems += 8;
};
loadMoreBtn.addEventListener('click', loadMore);

let likesArray = [];
const likesResult = getLikes();
likesResult.then((value) => {
  likesArray = value.data;
  likesArray.forEach((item) => {
    setLikeCount(item.item_id, item.likes);
  });
}).catch((err) => {
  console.log(err);
});
