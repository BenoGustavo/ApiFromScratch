# API FROM SCRATCH

This project is a simple user management API built for study purposes. It allows you to create, read, update, and delete users from a JSON-based database.

## Disclaimer

This project is for study purposes only and should not be used in production environments.

## Endpoints

### Create new user

```sh
curl --request POST \
 --url http://localhost:3333/users \
 --header 'Content-Type: application/json' \
 --data '{
"name": "John Doe",
"email": "john.doe@gmail.com"
}'
```

### Update the entire user

```sh
curl --request PUT \
 --url http://localhost:3333/users/:id \
 --header 'Content-Type: application/json' \
 --data '{
"name": "username",
"email": "email.myemail@domain.com"
}'
```

### Update a user partially

```sh
curl --request PATCH \
 --url http://localhost:3333/users/:id \
 --header 'Content-Type: application/json' \
 --data '{
"name": "new name"
}'
```

### Get one user from database

```sh
curl --request GET \
 --url http://localhost:3333/users/:id
```

### Get all users from database

```sh
curl --request GET \
 --url http://localhost:3333/users
```

### Delete user from database

```sh
curl --request DELETE \
 --url http://localhost:3333/users/:id
```

## Running the Project

To run the project, follow these steps:

1.  Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```sh
    cd fundamentos
    ```

3.  Run the project:

    ```sh
    npm run dev
    ```

The server will be running on `http://localhost:3333`.

## License

This project is licensed under the MIT License.
