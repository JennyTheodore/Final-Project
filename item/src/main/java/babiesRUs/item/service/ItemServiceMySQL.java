package babiesRUs.item.service;

import babiesRUs.item.repository.ItemRepository;
import babiesRUs.item.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceMySQL implements ItemService {
    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository )
    {
        this.itemRepository = itemRepository;
    }

    @Override
    public Item save( Item item )
    {
        return itemRepository.save( item );
    }

    @Override
    public void delete( int itemId ) {
        Optional<Item> itemToDelete = itemRepository.findById(itemId);

        if (itemToDelete.isPresent()) {
            itemRepository.deleteById(itemId);
            throw new ResponseStatusException(HttpStatus.OK, "The item has been successfully deleted");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The item was not found.");
        }
    }

    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach( result::add );
        return result;
    }

    @Override
    public Item findById(int itemId) {
        return null;
    }
}

