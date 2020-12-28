import {useEffect} from "react";
import {useParams} from "react-router-dom";

const Category = () => {

    const {name} = useParams();
    
    useEffect(() => {
        console.log(name)
    }, [name])

    return(
        <>
        <h1 id="fav">{name}</h1>

        </>
    )

}

export default Category;