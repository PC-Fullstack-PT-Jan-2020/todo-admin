const users = require('./user.json')
const todos = require('./todo.json')
const conn = require('../db')

conn.query(`DELETE FROM users;`)
conn.query(`DELETE FROM todos;`)

users.forEach(async (user) => {
  return await new Promise((resolve, reject) => {
    const { id, email, admin } = user
    const sql = `INSERT INTO users (id, email, admin) VALUES (?,?,?)`
    conn.query(sql, [id, email, admin])
  })
})

todos.forEach(async (todo) => {
  return await new Promise((resolve, reject) => {
    const { id, text, status, user } = todo
    const sql = `INSERT INTO todos (id, text, status, user_id) VALUES (?,?,?,?)`
    conn.query(sql, [id, text, status, user])
  })
})