const path = require('path')
const { app } = require('electron')

const filename = process.env.NODE_ENV === 'development' 
  ? './db.sqlite3' 
  : path.join(app.getPath('userData'), 'db.sqlite3');

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename
      },
      useNullAsDefault: true, // SQLite requirement
      migrations: {
        directory: './src/infra/database/migrations'
      }
    }
  };
  