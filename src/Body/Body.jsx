import {useState} from "react";
import ImageItem from "../ImageItem/ImageItem";

function Body(){
    // const[name, setName] = useState( null );
    const[images, setImages] = useState([
        {
            location: './images/grumpy-cat.webp',
            altText: "Grumpy cat"
        },
        {
            location: './images/purebread.jpg',
            altText: "Purebread"
        }

    ]);

    const[showCat, setShowCat]=useState( true );
    const[showDog, setShowDog]=useState( true );
    

    const toggleCat = () =>{
        console.log( 'in toggleImage' );
        setShowCat( !showCat );
    }

    const toggleDog = () =>{
        console.log( 'in toggleImage' );
        setShowDog( !showDog );
    }
    
    return(
        <div>
            <ImageItem itemsToPass={images} />
            <h1>Body</h1>
            {
                //if showImage is true
                showCat ?
                <img class="petImage" src={ images[0].location} alt={ images[0].altText} onClick={toggleCat} />: 
                <h2 onClick={toggleCat}>{ images[0].altText }</h2>//false
            }
            {
                showDog ?
                <img class="petImage" src={ images[1].location} alt={ images[1].altText} onClick={toggleDog}/>:
                <h2 onClick={toggleDog}>{ images[1].altText }</h2>//false
            }
        
        </div>
    )   
}

export default Body; 