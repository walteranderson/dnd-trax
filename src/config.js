export default {
  env: process.env.NODE_ENV || 'development',
  server: {
    ip: process.env.EXPORESS_IP || '127.0.0.1',
    port: process.env.EXPRESS_PORT || 3000
  },
  db: {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true
    }
  }
}
