import React from "react";
export default function Carousel (){
    return (
        <div id="carouselExample" class="carousel slide" style={{"width": "60rem"}}>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="shopbanner.jpg" class="d-block w-100" alt="..."/>
          </div>
         {/* <div class="carousel-item">
            <img src="blue.jpeg" class="d-block w-100" alt="..."/>
          </div> 
          <div class="carousel-item">
            <img src="shopbanner.jpg" class="d-block w-100" alt="..."/>
          </div>*/}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}