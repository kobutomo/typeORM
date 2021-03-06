import { User } from './src/entities/User'
import { Profile } from './src/entities/Profile'
import { Post } from './src/entities/Post'
module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "test_db",
  "synchronize": false,
  "logging": false,
  "entities": [
    User,
    Profile,
    Post
  ],
  "migrations": [
    __dirname + "/src/db/migrations/**/*.ts"
  ],
  "subscribers": [
    __dirname + "src/db/subscribers/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/db/migrations",
    "subscribersDir": "src/db/subscribers"
  }
}
