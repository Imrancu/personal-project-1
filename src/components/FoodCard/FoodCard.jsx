import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userAxiosSecure from "../../hooks/userAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const {image, name, price, recipe, _id} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = userAxiosSecure()
    const [, refetch]= useCart()

    const handleAddToCart = () => {
      if(user && user.email){
        
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items counts
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: "Please, Login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login Now"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-3 px-2">Price: ${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={ handleAddToCart} className="btn btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase mt-5">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
