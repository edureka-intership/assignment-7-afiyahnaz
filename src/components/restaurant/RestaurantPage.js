import { useState }  from "react";
import Header from "../Header";

function RestaurantPage ()  {

  let  [tab, setTab]  = useState(1);

  return <>
     <Header />
     <section className="row justify-content-center">
        <section className="col-11 mt-2 restaurant-main-image position-relative">
         <img src ="/images/restaurant-background.png"  alt=""/>
        <button className="btn-gallery position-absolute">
          Click to see Image Gallery
        </button>
        </section>

        <section className="col-11">
          <h2 className="mt-3">The Big Chill Cakery</h2>

          <div className="d-flex justify-content-between align-items-start">
             <ul className="list-unstyled d-flex gap-5 fw-bold">
              <li className="pb-2 hand" onClick={()=> setTab(1)}>
                Overview
              </li>
              <li className="pb-2 hand" onClick={()=> setTab(2)} >
                Contact
              </li>
            </ul>
            {/* <button className="btn btn-danger">Place Online Order</button> */}
          </div> 

           {
            (tab ===1 )  ? (<section>
               <h4 class="mb-3">About this Place</h4>
               <p className="m-0 fw-bold">Cuisine</p>
               <p className="mb-3 text-muted small">Bakery, Fast-food</p>
               

               <p className="m-0 fw-bold">Average Cost</p>
               <p className="mb-3 text-muted small">
                 $700 Cost for two(approx)
             </p>
           
           
           </section> )  : ( <section>
               <h4 class="mb-3">Contact</h4>
               <p className="m-0 fw-bold">Phone Numvber</p>
               <p className="mb-3 text-danger small">+91 10000111111</p>
               

               <p className="m-0 fw-bold">Average Cost</p>
               <p className="mb-3 text-muted small">
                  Shop 1, Plot D, Samruddhi Complex, Chincholi, mumbai-400002,
                  Maharastra
               </p>
           
           
           </section>
           )}




        </section>
     </section>
  </>
};



export default RestaurantPage;
  