package babiesRUs.item.controller.dto;

public class ItemDTO {

    private String name;

    private String description;

    private String imgUrl;

    public ItemDTO( String name, String description, String imageUrl )
    {
        this.name = name;
        this.description = description;
        this.imgUrl = imageUrl;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription( String description )
    {
        this.description = description;
    }

    public String getImageUrl()
    {
        return imgUrl;
    }

    public void setImgUrl( String imgUrl )
    {
        this.imgUrl = imgUrl;
    }
}
