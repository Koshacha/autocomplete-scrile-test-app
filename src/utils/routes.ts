export default {
    users: () => 'https://jsonplaceholder.typicode.com/users',
    photos: (id = '') => `https://jsonplaceholder.typicode.com/photos/${id}`
};