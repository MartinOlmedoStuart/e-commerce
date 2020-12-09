import "./Contenedor.css";

const ListaDeItems=[
    {
        url:"https://s3.surfinc.co/1274-product_ss19/merino-beanie.jpg",
        nombre:"Gorro Merino Gris Claro",
        precio:67
    },
    {
        url:"https://s1.surfinc.co/2325-product_ss19/classy-hoodie-black.jpg",
        nombre: "Sudadera con capucha",
        precio: 59
    },
    {
        url:"https://s1.surfinc.co/2296-product_ss19/sunset-seeker-longsleeve.jpg",
        nombre:"SUNSET SEEKER MANGA LARGA",
        precio:"$28"
    },
    {
        url:"https://s2.surfinc.co/2246-product_ss19/linen-shirt.jpg",
        nombre:"Camisa de Lino",
        precio:"$67"
    }
]


function Container({ greeting}){
    return(
        <div id="contenedor">
            <h1>{greeting}</h1>
        </div>
    )
}

export default Container;