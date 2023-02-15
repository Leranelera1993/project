let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

//start();

const personalMoovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько его оцените?", "");

    if (a === null || b === null || a === "" || b === "" || a.length > 50) {
      console.log("error");
      i--;
    } else {
      personalMoovieDB.movies[a] = b;
      console.log("done");
      //if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      //personalMoovieDB.movies[a] = b;
      //console.log("done");
      //} else {
      // console.log("error");
      //i--;
    }
  }
}

//rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMoovieDB.count < 10) {
    console.log("nizkii ball");
  }
}

//detectedPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMoovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoovieDB);
  }
}

//showMyDB(personalMoovieDB.private);

console.log(personalMoovieDB);
