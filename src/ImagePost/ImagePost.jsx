import {useState} from "react";

function ImagePost(props){
    // const[name, setName] = useState( null );

    return(
        <div>
            <h1>ImagePost</h1>
            <p>{JSON.stringify(props)}</p>
            <img class="petImage" src={props.imageToPost} alt="GrumpyCat" />
        </div>
    )   
}

export default ImagePost 