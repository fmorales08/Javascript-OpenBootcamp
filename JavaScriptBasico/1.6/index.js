let compras = ["aceite", "azucar", "café", "Harina", "pan"];
compras.push("Aceite de girasol");
compras.pop();

let movies = [
	{ title: "Interestellar", dir: "Nolan", fecha: 2014 },
	{ title: "The Prestige", dir: "Nolan", fecha: 2006 },
	{ title: "Parasites", dir: " Bong Joon-ho", fecha: 2020 },
];
const movies2012 = movies.filter((film) => film.fecha > 2010);
const directors = movies.map((film) => film.dir);
const titles = movies.map((film) => film.title);
const films = directors.concat(titles);
console.log(directors);
