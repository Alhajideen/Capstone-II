import showComment from './showComment.js';
import postLike from './postLike.js';
import likeElement from './likeElement.js';
/**
 * Creates specified amount of items and appends them to the specified Container
 * @param {number} numberOfItems
 * @param {Element} showContainer
 * @param {Array} Array
 */
const displayShows = (from, to, showContainer, Array) => {
  for (let i = from; i < to; i += 1) {
    const show = Array[i];
    const htmlString = `
        <li class="show" id="${show.id}">
          <div class='imageContainer'>
            <img src="${show.image.medium}" alt="" class="showImage">
            <h2 class="showTitle">${show.name}</h2>
          </div>
          <div class='showInfo'>
            <div class="showDescription">${show.summary}</div>
            <div class="genres">
            </div>
            <div class="interactions">
              <div class="comment" id="${show.id}">
                <i class="fa-regular fa-comment-dots"></i>
                <span class="commentCount"></span>
              </div>
              <div class="like" id="${show.id}">
                <i class="fa-regular fa-heart"></i>
                <span class="likeCount">0</span>
              </div>
            </div>
          </div>
        </li>
        `;
    showContainer.insertAdjacentHTML('beforeend', htmlString);
    const commentBtn = document.querySelector(`.comment[id="${show.id}"]`);
    commentBtn.addEventListener('click', () => {
      showComment(show.id);
    });

    const likeBtn = document.querySelector(`.like[id="${show.id}"]`);
    likeBtn.addEventListener('click', () => {
      postLike(show.id);
      likeElement(show.id);
    });
  }
};

export default displayShows;