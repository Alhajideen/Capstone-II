import itemCount from '../modules/items';

describe('Test item counts', () => {
  test('Count three items', () => {
    const itemsArr = [
      {
        name: 'Movie 1',
      },
      {
        name: 'Movie 2',
      },
      {
        name: 'Movie 3',
      },
    ];

    const counter = itemCount(itemsArr);

    expect(counter).toBe(3);
  });
});
