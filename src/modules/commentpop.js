import Requests from './Requests.js';
let countComment = [];

const { default: axios } = require('axios');

const showPop = async (post) => {
  const container = document.querySelector('.cmt-container');
  const lists = await fetchCmt(post.id);
  let cmts = cmtCount(countComment);
  container.style.display = 'flex';
  container.innerHTML = `<div class="containers">
        <div class="movie-details">
          <div class="close-x">
            <i class="fa-solid fa-x"></i>
          </div>
          <div class="movie-name">
            <h1>Movie Tittle: ${post.name}</h1>
          </div>
          <div class="movie-banner">
            <img
              src="${post.image.original}"
              alt="Movie Banner"
            />
          </div>
          <div class="movie-summary">
            <h2>
             ${post.summary}
            </h2>
          </div>
          <div class="more-lists">
            <ul class="lists">
              <li class="item">‣ Type: <span class="type">${post.type}</span></li>
              <li class="item">
                ‣ Language: <span class="language">${post.language}</span>
              </li>
              <li class="item">
                ‣ Date Premiered: <span class="date">${post.premiered}</span>
              </li>
            </ul>
          </div>
          <div class="comment-lists">
            <div class="table-head">
              <h2>Comments(${cmts})</h2>
            </div>
            <table>
                <tbody class="tbody">
                ${lists}
                </tbody>
            </table>
          </div>
          <div class="add-comment">
            <form>
              <div class="heading">
                <h1>Add your comment</h1>
              </div>
              <div class="input-name">
                <input class="username" type="text" 
                name="username"
                placeholder="Your name" />
              </div>
              <div class="input-cmt">
                <textarea
                  name="comment"
                  class="comment"
                  cols="30"
                  rows="10"
                  placeholder="Your comment about the movie"
                ></textarea>
              </div>
              <div class="submit-btn">
                <button class='btn'>Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>`;

  document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('.username');
    const comment = document.querySelector('.comment');
    const { id } = post;
    Requests.postComment(id, username.value, comment.value);
  });
  document.querySelector('.close-x').addEventListener('click', (e) => {
    e.preventDefault();
    container.style.display = 'none';
  });
};

const fetchCmt = async (id) => {
  countComment = [];
  let list = '';
  try {
    const comments = await axios(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNEDOqZq19cgTLm1Vfps/comments?item_id=${id}`
    );
    const response = await comments.data;
    response.forEach((comment) => {
      countComment.push(comment);
      list += ` <tr class="mt-5">
                    <td class="cmt-date">${comment.creation_date}</td>
                    <td class="cmt-name">${comment.username}</td>
                    <td class="cmt-body"><i>${comment.comment}</i></td>
                  </tr>`;
    });
  } catch (err) {
    const nodata = 'No comment yet,😄 Be the first';
    list += ` <tr>
                    <td class="cmt-body" colspan="3"><i>${nodata}</i></td>
                  </tr>`;
  }
  return list;
};

const cmtCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
};

export default showPop;
