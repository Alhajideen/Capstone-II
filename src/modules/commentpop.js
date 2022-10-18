const showPop = (post, comments) => {
  let list = '';
  comments.forEach((comment) => {
    list += ` <tr>
                    <td class="cmt-date">${comment.creation_date}</td>
                    <td class="cmt-name">${comment.username}</td>
                    <td class="cmt-body"><i>${comment.comment}</i></td>
                  </tr>`;
  });
  
};

export default showPop;
