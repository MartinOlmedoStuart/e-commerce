import "./Contenedor.css";
import Listitems from "../components/ListItems";
import {useState, useEffect} from "react";




function Container(){

    const [items, setItems] = useState([]);

    // const task = new Promise ((resolve, reject) => {
    //     if(true){
    //       setTimeout(()=> {
    //         resolve("Aca estan tus datos pibe");
    //       }, 3000)
          
    //     }else{
    //       reject("todo mal");
    //     }
    //   })
    //   task
    //   .then(rta => console.log(rta))
    //   .catch(err => console.log(err));

    const getProducts = new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(products);
        },5000)
    })
    
    useEffect(() => {
        getProducts.then(rta => setItems(rta))
    },[]);

   

    const products=[
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

    const products2 = [
        {
            url:"https://s1.surfinc.co/2554-product_ss19/knitted-v-sweater-purple-haze.jpg",
            nombre:"Jersey de punto de punto",
            precio:"$63"},
        {
            url:"https://s2.surfinc.co/2269-product_ss19/high-hopes-tee-space-black.jpg",
            nombre:"CAMISETA HIGH HOPES",
            precio:"$19"
        },
        {
            url:"https://s3.surfinc.co/1078-product_ss19/grey-tee.jpg",
            nombre:"CAMISETA GRIS",
            precio:"$21"
        },
        {
            url:"https://s2.surfinc.co/2551-product_ss19/srf-tee.jpg",
            nombre:"SRF TEE Stone GRIS",
            precio:"$67"
        }
    ];

    return(
        <>
        
        <h1 id="fav">NUESTROS FAVORITOS</h1>
        
            { 
            items.length ? 
            <>
                <div id="contenedor">
                    {items.map(item => (
                        <Listitems url={item.url} nombre={item.nombre} precio={item.precio} />
                    ))}

                </div>
                   <div id="contenedor">
                    {products2.map(item => (
                            <Listitems url={item.url} nombre={item.nombre} precio={item.precio} />
                       ))}
                 </div>
            </> : 
                    <div id="contenedor2">
                    <p className="negro">Cargando items...</p>
                    <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
                    </div>
            }
       

        </>
        
    )
}

export default Container;