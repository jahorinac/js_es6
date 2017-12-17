const ProductFactory = require("./product-factory");

const entity = new ProductFactory().create();
entity.setId(5);
entity.setName("premium");
entity.setPrice(54.99);

console.log(entity.getData());
