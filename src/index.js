import getShows from './modules/getShows.js';
// import getLikes from './modules/getLikes.js';
import ShowLibrary from './modules/ShowLibrary.js';
import './desktop.css';
import './style.css';

const showContainer = document.getElementById('showList');
const result = getShows();
result.then((value) => {
  const showLib = new ShowLibrary(value.data);
  showLib.displayShows(10, showContainer);
});
// .catch((err) => {
//   console.log(err);
// });
