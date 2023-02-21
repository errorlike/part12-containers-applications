db.createUser({
  user: 'test',
  pwd: 'test',
  roles: [
    {
      role: 'dbOwner',
      db: 'todo-database',
    },
  ],
});

db.createCollection('todos');

db.todos.insert({ text: 'Write code', done: true });
db.todos.insert({ text: 'Learn about containers', done: false });