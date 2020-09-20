class UsersApiClient {

  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  getAllUsers() {
    return fetch(this.baseUrl);
  }

  getUserById(id) {
    const data = { id };

    return fetch(
      this.baseUrl,
      {
        method: 'GET',
        body: JSON.stringify(data)
      }
    )
  }

}

const usersApiClient = new UsersApiClient();
export default usersApiClient;