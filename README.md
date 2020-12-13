# PokemonGames

**Author:** Vitor Carvalho

### Requirements

* v14.15.1 (Without Docker)

## Installation Guide (Unix)

To start the installation, the repository needs to be cloned at a preferred location. This can be done executing the following command:

```
git clone https://github.com/VitorMatheus097/pokemon-games [location]
```

After cloning, access the directory of the application using:

```
cd [location]
```

From now this directory will be referred as the ```root directory``` or just ```/```.

## Initializing the application

After cloning the application, it is ready to be tested, and can be done by executing the following command using a command line tool in the ```root directory```:

```
docker-compose up
```

After this command, the application is ready to go, and can be accessed at http://localhost:8080.

If **not using docker**, in order to run the application in development mode, with NodeJs already installed, run the following commands at the ```root directory```:

```
npm install
npm start
```

After this, the application will be started, and can be accessed at http://localhost:4200.
