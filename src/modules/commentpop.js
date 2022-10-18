const showPop = () => {
  return `<div class="containers">
        <div class="movie-details">
          <div class="close-x">
            <i class="fa-solid fa-x"></i>
          </div>
          <div class="movie-name">
            <h1>Movie Tittle: Under the Dome</h1>
          </div>
          <div class="movie-banner">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
              alt="Movie Banner"
            />
          </div>
          <div class="movie-summary">
            <h2>
              <p>
                <b>Under the Dome</b> is the story of a small town that is
                suddenly and inexplicably sealed off from the rest of the world
                by an enormous transparent dome. The town's inhabitants must
                deal with surviving the post-apocalyptic conditions while
                searching for answers about the dome, where it came from and if
                and when it will go away.
              </p>
            </h2>
          </div>
          <div class="more-lists">
            <ul class="lists">
              <li class="item">‣ Type: <span class="type">Scripted</span></li>
              <li class="item">
                ‣ Language: <span class="language">English</span>
              </li>
              <li class="item">
                ‣ Date Premiered: <span class="date">2013-06-24</span>
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
                  <tr>
                    <td class="cmt-date">27-10-2022</td>
                    <td class="cmt-name">Deen</td>
                    <td class="cmt-body"><i>Nice Movie. Will watch</i></td>
                  </tr>
                  <tr>
                    <td class="cmt-date">27-10-2022</td>
                    <td class="cmt-name">Deen</td>
                    <td class="cmt-body"><i>Nice Movie. Will watch</i></td>
                  </tr>
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
