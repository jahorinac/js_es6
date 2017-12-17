const ProductFactory = require("./product-factory");

const entity = new ProductFactory().create();

entity.setId(5);
entity.setName("premium");
entity.setPrice(55);

console.log(entity.getData());

console.log(entity.getId());
console.log(entity.getName());
console.log(entity.getGrossPrice());




