package babiesRUs.item.controller;

import babiesRUs.item.controller.dto.ItemDTO;
import babiesRUs.item.repository.entity.Item;
import babiesRUs.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/add")
    public Item createItem(@RequestBody ItemDTO newItemDTO){
        return itemService.save(newItemDTO);
    }

    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @PutMapping("/{id}")
    public Item updateItem(@RequestBody ItemDTO itemDTO, @PathVariable("id") int itemId){
        return itemService.update(itemDTO, itemId);
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }
}
