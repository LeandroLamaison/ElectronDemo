const path = require('path')

const filename = process.env.NODE_ENV === 'development' 
    ? './db.sqlite3' 
    : path.join(process.resourcesPath, './db.sqlite3')

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename
      },
      useNullAsDefault: true, // SQLite requirement
      migrations: {
        directory: './migrations'
      }
    }
  };
  