import {users} from './userCardInfo.js'
import { useState  } from 'react';
import "./userCard.css"
function UserCard(){

    var [card]=useState(users);   //state variable

    return(
      <div style={{padding:"20px",margin:"50px"}}>

          <div>
          <h2>Users Information</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vel nisi numquam, rem natus aliquid, ab optio facere sed, atque pariatur at libero? Voluptates perferendis optio, blanditiis ipsam reprehenderit ad!
          Ad voluptates est incidunt. Cumque qui cupiditate obcaecati libero, quam quo corporis odit quaerat, ipsum eius, animi error dicta commodi. Asperiores sequi est eum repudiandae velit tempore corporis id nostrum.
          Sint dignissimos accusamus at cumque culpa sunt ipsam, laborum dicta, dolores debitis nostrum eius necessitatibus tempora ex asperiores nisi tempore numquam unde tenetur! Error ea eveniet eos tempore exercitationem amet.
          Reprehenderit cumque consectetur est, ea cupiditate ab dolorem debitis? Molestias quidem fugiat minus repellat numquam modi aspernatur magnam, enim quibusdam cumque dignissimos doloribus repudiandae perspiciatis suscipit, dolorem non aliquam mollitia.
          Sed non, quis ratione amet minima obcaecati eaque quibusdam recusandae, est inventore quasi delectus et praesentium velit sapiente, voluptates quaerat. Et pariatur illo deleniti nesciunt, rem assumenda explicabo asperiores fugiat!
          Modi corrupti cum quos necessitatibus veniam adipisci enim molestias. Corrupti quia quidem non dicta ut natus, ullam consequuntur mollitia minima delectus unde et modi, officiis rerum vel ratione eum tempore?
          Illo itaque provident nulla ipsam aliquid a quisquam, iure eos? Optio veritatis modi iusto. Aspernatur cumque consequuntur nam delectus magnam sed reiciendis quasi temporibus perspiciatis? Nobis repudiandae assumenda odio facere?
          Nam obcaecati possimus pariatur quam, rem sed minus rerum distinctio? Odit fugit sed recusandae minima, aut suscipit perferendis nisi quasi porro non facilis corrupti eveniet aliquam ipsum dicta totam adipisci!
          Ipsum commodi minima reiciendis nostrum pariatur. Modi, nobis nulla magni rerum laboriosam mollitia sit similique iste consequuntur libero? Debitis repudiandae architecto molestias magni corporis nesciunt tenetur ullam vel voluptates sequi.
          Laboriosam vitae sit cumque voluptatibus blanditiis debitis voluptate ad incidunt placeat veniam in tempora iure impedit, temporibus minus. Commodi debitis blanditiis veritatis ipsa nisi iste voluptate assumenda id perferendis aspernatur!</p>
        </div>

        <div id='cardContainer' key={users.email}>

            {
                card.map((user)=>{
                return(
                        <div id="card">
                <img src={user.imageUrl} alt="" width={270} height={300}/>
                <h4>{user.name}</h4>
                <h5>{user.gender}</h5>
                <h5>{user.email}</h5>
                <h5>{user.city}</h5>

            </div>   
                )
                })
            }
                     
        </div>

      </div>

      
    )

}

export default UserCard;