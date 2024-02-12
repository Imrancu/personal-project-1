

const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item
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
          <button className="btn btn-outline border-0 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-0 border-b-2 bg-slate-100 uppercase mt-5">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
