package babiesRUs.item.service;

import babiesRUs.item.controller.dto.ItemDTO;
import babiesRUs.item.repository.entity.Item;

import java.util.List;

public interface ItemService {

    Item save(ItemDTO itemDTO );

    Item update(ItemDTO itemDTO, int itemId);
    void delete(int itemId );

    List<Item> all();

    Item findById( int itemId );

}
