import {useState} from "react";
import "./Products.css";

import Product from "../../components/product/product";
import StaticProduct from "../../components/product/StaticProduct";
import Noproduct from "../../components/product/Noproduct";

function Products(){
    const [products,setProducts]= useState([]);

    return(
        <div className="products">
          <StaticProduct setProducts={setProducts}/>
       

       <div>

        
        {
            products.length>0 ?
            (<div className="products-data">
                {
                    products.map(function(products){
                        return (
                           
                            <Product products={products}/> //props
                            
                        )
                    })
                }
            </div>

            )  
            : (
                 <Noproduct/>

            )  }
       </div>
        </div>

    )

}

export default Products