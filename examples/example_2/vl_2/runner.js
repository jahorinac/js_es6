const ProductFactory = require("./product-factory");

var data = {
    "id"    : 0,
    "name"  : "",
    "price" : 0
}

const entity = new ProductFactory().create(data);

entity.setId(5);
entity.setName("premium");
entity.setPrice(55);

console.log(entity.getData());

console.log(entity.getId());
console.log(entity.getName());
console.log(entity.getGrossPrice());




