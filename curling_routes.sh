# GET Request
curl -X GET http://localhost:3333/

#GET ONE USER
curl -X GET http://localhost:3333/users/3453531231

# POST Request
curl -X POST http://localhost:3333/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john.doe@example.com"}'

# PUT Request
curl -X PUT http://localhost:3333/

# PATCH Request
curl -X PATCH http://localhost:3333/

# DELETE Request
curl -X DELETE http://localhost:3333/