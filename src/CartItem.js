export default ({ price, quantity, onRemoveItem, totalPriceItem, title }) => {
 return (
  <div className="cart-item">
   <h2 className="cart-item__title">{title}</h2>
   <div className="cart-item__price">
    <input className="cart-item__quantity" type="number" defaultValue={quantity} /> x $
    {price}
    <div className="cart-item__subtotal">${totalPriceItem}</div>
   </div>
   <p>
    <button onClick={onRemoveItem} className="cart-item__button">
     Remove from cart
    </button>
   </p>
  </div>
 );
};
