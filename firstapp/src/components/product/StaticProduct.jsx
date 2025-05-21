import React from 'react'
import { getProducts } from "../../pages/products/Products";
function StaticProduct({setProducts}) {
    

  return (
    <div>
        <h2>Products Page</h2>
            <p>Lorem ipsum dolr sit amet consectetur adipisicing elit. Accusamus possimus dolores quo, esse odio, libero labore cum dolorum aspernatur incidunt ea similique explicabo quidem maiores at veniam ipsa amet sint.
            Vel provident illum dolores, architecto voluptatem quos pariatur ad blanditiis similique repellendus obcaecati! Consectetur quibusdam placeat laudantium. Magnam sed necessitatibus ea quod provident voluptates aliquid ipsam, ipsum velit odio exercitationem.
            Quasi esse ullam enim exercitationem nisi provident iste rerum fugiat vero vitae ipsum accusamus, cum, qui reiciendis numquam sint quod magni voluptatibus quisquam deleniti a incidunt. Autem dolorem in sunt.
            Illum sequi voluptas cumque maiores tenetur fugit inventore ad officia architecto ut illo dolorum consectetur dolor, fuga nihil labore impedit dolores facere iusto nesciunt! Incidunt, voluptatibus! Quas dolorum debitis illum!
            Veritatis libero cumque pariatur hic nesciunt iste nulla debitis esse vitae laborum provident a placeat quasi quia itaque aspernatur, laboriosam odit atque quisquam reiciendis ipsum tenetur! Enim praesentium corrupti error?
            Enim sapiente doloremque fuga, corporis itaque tenetur consequuntur iste sunt vero aspernatur sequi, cumque eum suscipit et debitis nulla explicabo dolor deserunt, placeat excepturi nisi quae odit distinctio. Tempora, earum!
            Vitae aut soluta ea doloremque eos dolores, voluptates laborum libero minima et quia illo sunt repellat nam aliquid alias voluptatum cum porro eius, recusandae possimus ex veniam qui omnis. Nisi.
            Vel eveniet ea officiis necessitatibus id laudantium quod repellat aliquam molestias voluptatibus mollitia delectus at consequatur ipsam quos ut non rem maxime quia sed rerum, odio consequuntur atque quo. Ipsam?
            Maxime excepturi, saepe, nisi ipsum modi obcaecati voluptate accusantium sequi quia eum dolores assumenda commodi veniam, inventore fuga eos. Quis veritatis velit aut dignissimos. Ut reprehenderit nihil pariatur fuga doloremque?
            Sed officiis architecto veniam nihil dolor repellat odit, libero eveniet assumenda doloribus cupiditate a unde odio, corporis consequatur? Porro voluptates, illum nesciunt ipsum voluptatibus quae sed sequi veritatis laboriosam. Sequi!</p>
            <button onClick={()=>{
                getProducts(setProducts)
            }}>Get Products</button>
             <br/> <br/>
    </div>
  )
}

export default StaticProduct
