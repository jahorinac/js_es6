
var ProductEntity = require("./product-entity")

class ProductFactory {

    constructor(data) {
        this.data = data
    }

    create() {

        try {
            return new ProductEntity(this.data)
        } catch (e) {
            console.log("Invalid data given: " + e.message);
        }
    }
}

module.exports = ProductFactory