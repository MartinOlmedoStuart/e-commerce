const CartItem = ({nombre,url,precio}) => {
    return(
        <div className="preview">
        <img src={url} alt=""/>
        <div>
            <h3>{nombre}</h3>
            <h3 id="precius">{precio}</h3>
        </div>
    </div>
    )
}

export default CartItem;