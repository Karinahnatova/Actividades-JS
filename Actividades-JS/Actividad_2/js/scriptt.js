/*Supongamos que estás trabajando con una colección de objetos que representan diferentes obras de arte en una galería. Cada objeto contiene información sobre el artista, el año de la obra, el título, y si está actualmente en exhibición.*/

//https://tomascei.github.io/manual-md/

//Del siguiente objeto:

const ArtGallery = [
  {
    id: 1,
    artist: "Monet",
    title: "Water Lilies",
    year: 1916,
    isExhibited: true,
  },
  {
    id: 2,
    artist: "Van Gogh",
    title: "Starry Night",
    year: 1889,
    isExhibited: true,
  },
  {
    id: 3,
    artist: "Da Vinci",
    title: "Mona Lisa",
    year: 1503,
    isExhibited: false,
  },
  {
    id: 4,
    artist: "Picasso",
    title: "Guernica",
    year: 1937,
    isExhibited: true,
  },
  {
    id: 5,
    artist: "Rembrandt",
    title: "The Night Watch",
    year: 1642,
    isExhibited: false,
  },
  {
    id: 6,
    artist: "Dali",
    title: "The Persistence of Memory",
    year: 1931,
    isExhibited: true,
  },
  {
    id: 7,
    artist: "Munch",
    title: "The Scream",
    year: 1893,
    isExhibited: false,
  },
  { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true },
  {
    id: 9,
    artist: "Hopper",
    title: "Nighthawks",
    year: 1942,
    isExhibited: false,
  },
  {
    id: 10,
    artist: "Vermeer",
    title: "Girl with a Pearl Earring",
    year: 1665,
    isExhibited: true,
  },
];

/* 1- Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato:
"La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"*/

// ArtGallery.forEach((x) => {
//   console.log(
//     `La obra ${x.title} por el autor ${x.artist} (${x.year}) se encuentra exhibida: ${x.isExhibited}`
//   );
// });


/*function mostrarTodo() {
  ArtGallery.forEach((arte) => {
    if(arte.isExhibited === true) {
      console.log(
        `La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) se encuentra exhibida`
      )
    } else {
      console.log(
        `La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) no se encuentra exhibida`
      )

    }
  })
}*/

const imprimirObras=(arte)=> {
  const isExhibida = arte.isExhibited ? "SE"
: "NO SE" ;
console.log(
  `La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) (${isExhibida}) encuentra exhibida`
)}
ArtGallery.forEach(imprimirObras) //for each devuelve udefined

/* 2- Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.*/

let ArtGalleryTittles = ArtGallery.map((obras) => obras.title);

console.log(ArtGalleryTittles);

/* 3- Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.*/

let inExhibition = ArtGallery.filter((obras) => {
  if (obras.isExhibited === true) {
    return obras;
  }
});

console.log(inExhibition);

//= asignar
//== comparar
//=== compraración perfecta



/*Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica*/

function findPainByTitle(desiredTitle) {
  return ArtGallery.find(({ title }) => title === desiredTitle);
}

console.log(findPainByTitle("Mona Lisa"));


/*const obraBuscada = ArtGallery.find (obra => {obra.title == "Picasso"})
console.log(obraBuscada)*/


/*Agregar una función que permita añadir nuevas obras al array galería*/
/*let newObject = {
    id:" XRYXRY"
}*/
//new object 
//func => accepts: object
//array.push(newObject) =

const nuevaObra = {
  artist: "Pablo",
  title: "Mi gran obra maestra",
  year: 2023,
  isEsxhibited: true
}

function agregarObra(nuevaObra) {
  ArtGallery.push(nuevaObra)
}




/*Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).*/

const fecha = (year) => {
    const paintingFromYear = ArtGallery.some(painting.year === year)
    if(paintingFromYear){
      console.log(`Hay obras de arte del año ${year}`)
    } else {
      console.log(`No se encontrar obras de ese año`)
    }
}
console.log(ArtGallery.some(year))

//some devuelve un boolean


/*Emplea every para comprobar si todas las obras son posteriores a un cierto año, por ejemplo tu año de nacimiento.*/

const posterior = (({year}) => year > 2004)
console.log(ArtGallery.every(posterior))


/*Usa findIndex para encontrar la posición en el array de una obra específica.*/




/*Agregar una función que permita añadir nuevas obras al array galería*/




/*Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id*/