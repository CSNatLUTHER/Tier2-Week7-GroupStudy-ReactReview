import {useState} from "react";
import ImagePost from "../ImagePost/ImagePost";

function ImageItem(props){
    // const[name, setName] = useState( null );

    return(
        <div>
            <h1>ImageItem</h1>
            <p>{ JSON.stringify(props)}</p>        
            <img class="petImage" src={ props.itemsToPass[0].location} alt={ props.itemsToPass[0].altText}></img>

            <ImagePost imageToPost = {props.itemsToPass[0].location} />
        </div>
    )   
}

export default ImageItem 