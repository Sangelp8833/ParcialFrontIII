function Card(props){
    return(
        <div>
            <p>Tu genero músical favorito es: </p> <span> {props.gendre} </span>
            <hr/>
            <p>Y tu Artista favorita es:  </p> <span> {props.artist} </span>
        </div>
    )
}

export default Card