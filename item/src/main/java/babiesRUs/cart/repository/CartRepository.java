package babiesRUs.cart.repository;

import babiesRUs.cart.repository.entity.Cart;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called itemRepository
// CRUD refers Create, Read, Update, Delete
public interface CartRepository extends CrudRepository<Cart, Integer>
{
}
