package babiesRUs.cart.service;

import babiesRUs.cart.controller.dto.CartDTO;
import babiesRUs.cart.repository.CartRepository;
import babiesRUs.cart.repository.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceMySQL implements CartService {
    private final CartRepository cartRepository;

    public CartServiceMySQL(@Autowired CartRepository cartRepository)
    {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart save(CartDTO cartDTO) {
//      converting a PlayerDTO to a Player entity
        Cart cart = new Cart(cartDTO);
        return cartRepository.save(cart);
    }
    @Override
    public Cart update(CartDTO cartDTO, int itemId) {
        Cart cartFromDb = findById(itemId);

//        update the players information
        if(cartDTO.getName() == null){
            cartFromDb.setName(cartFromDb.getName());
        } else if(cartDTO.getName().isEmpty()) {
            cartFromDb.setName(cartFromDb.getName());
        } else {
            cartFromDb.setName(cartDTO.getName());
        }

        cartFromDb.setDescription(cartDTO.getDescription() != null ? cartDTO.getDescription() : cartDTO.getDescription());
        cartFromDb.setImgUrl(cartDTO.getImgUrl() != null ? cartDTO.getImgUrl() : cartDTO.getImgUrl());
//        save the player back to the DB
//        return the player to the client
        return cartRepository.save(cartFromDb);
    }

    @Override
    public void delete( int itemId ) {
        Optional<Cart> itemToDelete = cartRepository.findById(itemId);

        if (itemToDelete.isPresent()) {
            cartRepository.deleteById(itemId);
            throw new ResponseStatusException(HttpStatus.OK, "The item has been successfully deleted");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The item was not found.");
        }
    }

    @Override
    public List<Cart> all() {
        List<Cart> result = new ArrayList<>();
        cartRepository.findAll().forEach( result::add );
        return result;
    }

    @Override
    public Cart findById(int itemId) {
        Optional<Cart> optionalItem = cartRepository.findById(itemId);
        if(optionalItem.isEmpty()){
            return null;
        }
        return optionalItem.get();
    }
}

