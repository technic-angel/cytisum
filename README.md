# Cytisum
Cytisum is a platform designed around the sharing and discussion of images, loosely based on the imageboard format.

# Requirements
* `npm >= 10.2.4`
* A working instance of PostgreSQL
* A valid Cloudinary account and preset for image hosting

## Frontend build instructions
In order for the server to function, you *must* have a properly configured `.env` file in the `backend` directory. An example is provided below.

```
NEXT_PUBLIC_CLOUDINARY_NAME='******'
NEXT_PUBLIC_CLOUDINARY_PRESET='******'
```
Then, you must install the project requirements, build and launch the server like so:
```
$ cd ./frontend/cytisum
$ npm install
$ npm run build
$ npm run start
```

## Backend build instructions
In order for the server to function, you *must* have a properly configured `.env` file in the `backend` directory. An example is provided below.

```
DB_USER="cytisum"
DB_PASS="**********"
DB_NAME="test_db"
DB_HOST='postgresql://${DB_USER}:${DB_PASS}@127.0.0.1:5432/${DB_NAME}'
```

```
$ cd ./backend
$ npm install
$ prisma migrate dev --name init
$ npm build
$ npm run start
```