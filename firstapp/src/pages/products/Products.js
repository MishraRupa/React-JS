import axios from "axios"

export const getProducts = (setProducts)=>{
    axios.get("https://fakestoreapi.com/products")
    .then((result)=>{
        console.log("then",result.data);
        setProducts(result.data);
        

    }).catch((error)=>{
         console.log(error);
    })

}

