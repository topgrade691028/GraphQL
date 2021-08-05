const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   students:store.collection('students'),
   colleges:store.collection('colleges')
};