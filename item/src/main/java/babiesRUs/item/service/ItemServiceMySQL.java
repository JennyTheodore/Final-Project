package babiesRUs.item.service;

import babiesRUs.item.controller.dto.ItemDTO;
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
    public Item save(ItemDTO itemDTO) {
//      converting a PlayerDTO to a Player entity
        Item item = new Item(itemDTO);
        return itemRepository.save(item);
    }
    @Override
    public Item update(ItemDTO itemDTO, int itemId) {
        Item itemFromDb = findById(itemId);

//        update the players information
        if(itemDTO.getName() == null){
            itemFromDb.setName(itemFromDb.getName());
        } else if(itemDTO.getName().isEmpty()) {
            itemFromDb.setName(itemFromDb.getName());
        } else {
            itemFromDb.setName(itemDTO.getName());
        }
        itemFromDb.setDescription(itemDTO.getDescription() != null ? itemDTO.getDescription() : itemDTO.getDescription());
        itemFromDb.setImgUrl(itemDTO.getImgUrl() != null ? itemDTO.getImgUrl() : itemDTO.getImgUrl());
        itemFromDb.setPrice(itemDTO.getPrice() != null ? itemDTO.getPrice() : itemDTO.getPrice());
//        save the player back to the DB
//        return the player to the client
        return itemRepository.save(itemFromDb);
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
        Optional<Item> optionalItem = itemRepository.findById(itemId);
        if(optionalItem.isEmpty()){
            return null;
        }
        return optionalItem.get();
    }
}

