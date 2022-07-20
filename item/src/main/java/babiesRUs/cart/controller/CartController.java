package babiesRUs.cart.controller;

import babiesRUs.cart.controller.dto.CartDTO;
import babiesRUs.cart.repository.entity.Cart;
import babiesRUs.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {

    final CartService cartService;


    public CartController(@Autowired CartService cartService)
    {
        this.cartService = cartService;
    }

    @GetMapping( "/all" )
    public Iterable<Cart> getItems()
    {
        return cartService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public Cart createItem(@RequestBody CartDTO newCartDTO){
        return cartService.save(newCartDTO);
    }

    @GetMapping( "/{id}" )
    public Cart findItemById(@PathVariable Integer id )
    {
        return cartService.findById( id );
    }

    @PutMapping("/{id}")
    public Cart updateItem(@RequestBody CartDTO cartDTO, @PathVariable("id") int itemId){
        return cartService.update(cartDTO, itemId);
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        cartService.delete( id );
    }
}
