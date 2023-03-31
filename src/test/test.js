<p className='text-xl font-semibold shadow-lg mt-5 p-3'>{singleCart.title}</p>

{props.cart.map((singleCart) => (
  <p className="text-xl font-semibold shadow-lg mt-5 p-3 border-t-2 border-slate-200">
    {singleCart.title}
  </p>
))}

const newCart = [...cart,book];
      setCart(newCart);