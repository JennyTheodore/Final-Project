package babiesRUs.item.service;

import babiesRUs.item.repository.entity.Item;

import java.util.List;

public interface ItemService {

    Item save(Item item );

    boolean delete( int itemId );

    List<Item> all();

    Item findById( int itemId );

}
