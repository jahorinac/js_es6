const ProductEntity = require("./product-entity");

class ProductFactory {

    create() {
        return new ProductEntity();
    }
}

module.exports = ProductFactory;