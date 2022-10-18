const showPop = (post, comments) => {
  let list = '';
  comments.forEach((comment) => {
    list += ` <tr>
                    <td class="cmt-date">${comment.creation_date}</td>
                    <td class="cmt-name">${comment.username}</td>
                    <td class="cmt-body"><i>${comment.comment}</i></td>
                  </tr>`;
  });
  return `<div class="containers">
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
              <h2>Comments(5)</h2>
            </div>
            <table>
              <div class="tbody">
                <tbody>
                  ${list}
                </tbody>
              </div>
            </table>
          </div>
          <div class="add-comment">
            <form>
              <div class="heading">
                <h1>Add your comment</h1>
              </div>
              <div class="input-name">
                <input type="text" placeholder="Your name" />
              </div>
              <div class="input-cmt">
                <textarea
                  name="comment"
                  cols="30"
                  rows="10"
                  placeholder="Your comment about the movie"
                ></textarea>
              </div>
              <div class="submit-btn">
                <button>Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>`;
};

export default showPop;
