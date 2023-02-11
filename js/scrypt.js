const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Один из последних просмотренных фильмов", ""),
  b = prompt("На сколько его оцените?", ""),
  c = prompt("Один из последних просмотренных фильмов", ""),
  d = prompt("На сколько его оцените?", "");

personalMoovieDB.movies[a] = b;
personalMoovieDB.movies[c] = d;

console.log(personalMoovieDB);
