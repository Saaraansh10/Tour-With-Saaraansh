import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    //starting me description pura ni aara readmore tk aaraa hai aur usko click krne pe show less aataa hai
    const description = readmore ? info :`${info.substring(0,200)}....`;
    //agr readmore me false rhega to read more show krenge vrna show less show krenge
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;