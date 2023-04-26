import CartItem from "./CartItem";
import { useCallback, useMemo } from "react";

export default ({ items, setCart }) => {
 const onRemoveItem = (index) => {
  const newCart = items.filter((item) => items.indexOf(item) !== index);
  setCart({
   items: newCart
  });
 }


 const mappedItems = items.map(({ price, quantity, title, id }, index) =>
  < CartItem
   key={id}
   price={price}
   title={title}
   totalPriceItem={quantity * price}
   quantity={quantity}
   onRemoveItem={() => onRemoveItem(index)
   }
  />
 )

 const totalCartPrice = items.reduce((totalAccumulated, { price, quantity }) => {
  const currentItemPrice = price * quantity
  return totalAccumulated + currentItemPrice;
 }, 0).toFixed(2);

 const calculateDiscount = ({ quantity, category, price }) => {
  let discount
  if (quantity === 2 && category === 'breakfast') {
   discount = (price * 2 / 100) * 20
   return parseFloat(discount.toFixed(2))
  }
  return 0
 }

 const discount = useMemo(() =>
  items.map((item) => ({
   ...item,
   discount: calculateDiscount(item)
  }
  )).reduce((acc, item) => acc + item.discount, 0)
  , [items])

 return (
  <div className="cart">
   <div className="cart__items">{mappedItems}</div>
   <div className="cart__total">
    <h3>Discount: ${discount}</h3>
    <h2>Total: ${(totalCartPrice - discount).toFixed(2)}</h2>
   </div>
  </div>
 );
};
