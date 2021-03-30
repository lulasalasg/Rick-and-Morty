
function Personajes (props) {
    return (






<div className="contenedor">


        <img src= {props.datosPersonaje.image}></img>
       
        
        <h3 className="nombre"> {props.datosPersonaje.name} </h3>
        <div className="datos">
        <ul >
        <li >{props.datosPersonaje.status}</li>
        <li >{props.datosPersonaje.species}</li>
        <li>Origin: {props.datosPersonaje.origin.name}</li>
        </ul>
        </div>
       </div>





        

       
    )
}



export default Personajes