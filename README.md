# todo-admin

## For this assignment we will be creating a todo app with the following functionality

1. user todo view (toggle status, create, delete) (only grab the "logged in user")
2. admin users view (create user, delete user) (if admin - can see these pages)
3. admin todos view (delete todo, create todo) (if admin - can see these pages)

## stretch goals
1. Login
2. Signup
3. Edit user


## regarding database seed (creates users and todos) (inside of server folder)
### note: it deletes users and todos

```npm run seed```

## this library uses semantic ui in react (link below...)

https://react.semantic-ui.com/elements/button/

## steps to get started.

1. create todo_app database in mysql
2. import the two create table commands (from seed.sql) into mysql
3. run db seeder to create a few records with todos and some users (npm run seed while in server folder)
