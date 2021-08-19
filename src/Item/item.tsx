import { Button } from "@material-ui/core";
import { cartItemType } from "../App";

import { Wrapper } from "../Item/item.styles";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
