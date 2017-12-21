const ProductEntity = require("./product-entity");

class ProductFactory {

    create(data) {
        return new ProductEntity(data);
    }
}

module.exports = ProductFactory;