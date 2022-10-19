import { cmtCount } from '../modules/commentpop.js';

describe('Total comments on a post', () => {
  test('Count four comments', () => {
    // Assign
    const commentArr = [
      {
        username: 'John',
        creation_date: '2022-19-10',
        comment: 'Great movie',
      },
      {
        username: 'Jane',
        creation_date: '2022-19-10',
        comment: 'I like this movie',
      },
      {
        username: 'John',
        creation_date: '2022-19-10',
        comment: 'Great movie',
      },
      {
        username: 'John',
        creation_date: '2022-19-10',
        comment: 'I will watch this movie',
      },
    ];

    // Act
    const totalComments = cmtCount(commentArr);

    // Assert
    expect(totalComments).toBe(4);
  });

  test('Count one comment', () => {
    // Assign
    const commentArr = [
      {
        username: 'John',
        creation_date: '2022-19-10',
        comment: 'Great movie',
      },
    ];

    // Act
    const totalComments = cmtCount(commentArr);

    // Assert
    expect(totalComments).toBe(1);
  });
});
