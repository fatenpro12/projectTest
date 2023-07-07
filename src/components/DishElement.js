import { Fragment } from "react";

function DishElement(props){
    console.log(props)
    return (
        <div className="card dish">
     {props.meals && <><img src={props.meals.strMealThumb} className="card-img-top" alt="..." /><div className="card-body">
                <h5 className="card-title">{props.meals.strMeal}</h5>
                <p className="card-text">{props.meals.strInstructions}</p>
                <a href="#" className="btn btn-primary">more ...</a>
            </div></>}
  </div>)
}
 export default DishElement;
