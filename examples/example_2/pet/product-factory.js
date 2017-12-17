
var ProductEntity = require("./product-entity")
var ProductId = require("./product-id")
var ProductName = require("./product-name")
var ProductPrice = require("./product-price")
var ProductCreateError = require("./errors/product-create-error")

class ProductFactory {

    static create(data) {
        if(null == data){
            throw new ProductCreateError("Missing data for product creation")
        }
        try {
            return new ProductEntity(
                new ProductId(data.id),
                new ProductName(data.name),
                new ProductPrice(data.price)
            )
        } catch (e) {
            throw new ProductCreateError("Cannot create product - " + e.message);
        }
    }
}

module.exports = ProductFactory
