import getShows from './modules/getShows.js';
// import getLikes from './modules/getLikes.js';
import ShowLibrary from './modules/ShowLibrary.js';
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
  console.log(err);
});

const loadMoreBtn = document.getElementById('loadMore');
const loadMore = () => {
  displayItems(numberOfItems, numberOfItems + 8, showContainer, showArray);
  numberOfItems += 8;
};
loadMoreBtn.addEventListener('click', loadMore);

});
// .catch((err) => {
//   console.log(err);
// });
