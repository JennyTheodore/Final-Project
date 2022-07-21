package babiesRUs.cart.service;

import babiesRUs.cart.controller.dto.CartDTO;
import babiesRUs.cart.repository.entity.Cart;

import java.util.List;

public interface CartService {

    Cart save(CartDTO cartDTO);

    Cart update(CartDTO cartDTO, int itemId);
    void delete(int itemId );

    List<Cart> all();

    Cart findById(int itemId );

}
