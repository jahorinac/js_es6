const ProductEntity = require("./product-entity");

class ProductFactory {

    create() {
        return new ProductEntity;
    }
    /*
    create(data) {
        return new ProductEntity(data);
    }*/
}

module.exports = ProductFactory;