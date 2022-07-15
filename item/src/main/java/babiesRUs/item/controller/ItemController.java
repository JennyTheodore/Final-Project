package babiesRUs.item.controller;

import babiesRUs.item.controller.dto.ItemDTO;
import babiesRUs.item.repository.entity.Item;
import babiesRUs.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController{

    final ItemService itemService;


    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    @GetMapping( "/all" )
    public Iterable<Item> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping
    public Item save( @RequestBody ItemDTO itemDTO )
    {
        return itemService.save( new Item( itemDTO ) );
    }

    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @PutMapping( "/{id}" )
    public Item update(@RequestBody ItemDTO itemDTO, @PathVariable Integer id )
    {
        Item item = itemService.findById( id );
        item.setName( item.getName() );
        item.setDescription( item.getDescription() );
        item.setImgUrl( item.getImgUrl() );
        return itemService.save( item );
    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }
}
