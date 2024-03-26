import _ from 'lodash';

const data = [
  {
    userName: 'User',
    role: 'admin',
  },
  {
    userName: 'User1',
    role: 'seller',
  },
  {
    userName: 'User2',
    role: 'seller',
  },
  {
    userName: 'User3',
    role: 'customer',
  },
];

const groupBy =_.groupBy(data, (item)=> item.role)
console.log(groupBy);
