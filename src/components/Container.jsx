import "./Contenedor.css";

function Container({children}){
    return(
        <div id="contenedor">
            {children}
        </div>
    )
}

export default Container;