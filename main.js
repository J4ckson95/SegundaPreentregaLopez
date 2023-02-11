const books = [
    {
        name: "AMANECER ROJO",
        author: "PIERCE BROWN",
        gender: "AVENTURA",
        pages: 544,
        category: "LITERATURA JUVENIL",
        price: 80000,
    },
    {
        name: "EL PSICOANALISTA",
        author: "JOHN KATZENBACH",
        gender: "THRILLER",
        pages: 523,
        category: "NOVELA DE SUSPENSO",
        price: 50000,
    },
    {
        name: "INFERNO",
        author: "DAN BROWN",
        gender: "SUSPENSO",
        pages: 640,
        category: "NOVELA DE SUSPENSO",
        price: 80000,
    },
    {
        name: "DE ANIMALES A DIOSES",
        author: "YUVAL NOAH HARARI",
        gender: "ENSAYO DE DIVULGACIÓN CIENTÍFICA",
        pages: 492,
        category: "HISTORIA",
        price: 50000,
    },
    {
        name: "EL ESPEJISMO DE DIOS",
        author: "RICHARD DAWKINS",
        gender: "CIENCIA",
        pages: 468,
        category: "RELIGIÓN",
        price: 120000,
    },
    {
        name: "ARCHIVO DE LAS TORMENTAS",
        author: "BRANDON SANDERSON",
        gender: "AVENTURA",
        pages: 1200,
        category: "LITERATURA JUVENIL",
        price: 100000,
    },
    {
        name: "UN FINAL PERFECTO",
        author: "JOHN KATZENBACH",
        gender: "THRILLER",
        pages: 432,
        category: "NOVELA DE SUSPENSO",
        price: 50000,
    },
    {
        name: "EL IMPERIO FINAL",
        author: "BRANDON SANDERSON",
        gender: "AVENTURA",
        pages: 1000,
        category: "LITERATURA JUVENIL",
        price: 90000,
    }
];
let message = "";
let key = "";
let filterType = "";
const filter = (filterType, key) => {
    let search = books.filter((item) => item[`${filterType}`] === key);
    search.forEach((data) => {
        message += `
        
        nombre del libro: ${data.name}
        autor : ${data.author}
        paginas: ${data.pages}
        Género: ${data.gender}
        Precio: ${data.price}`;
    });
};
alert("Biemvenido a la app de prueba de la blibliote Kamar-Taj");
while (key === "") {
    filterType = prompt("Para facilitar su busqueda por favor ingrese la palabra clave segun su busqueda (nombre, autor, género):").toLowerCase();
    switch (filterType) {
        case "nombre":
            key = prompt("Ingrese en nombre del libro que busca").toUpperCase();
            filterType = "name";
            break;
        case "autor":
            key = prompt("Ingrese en nombre del autor que busca").toUpperCase();
            filterType = "author";
            break;
        case "género":
            key = prompt("Ingrese el género del libro que busca").toUpperCase();
            filterType = "gender";
            break;
        default:
            alert("Palabra clave erronea");
            break;
    }
}

filter(filterType, key);
alert(message);
