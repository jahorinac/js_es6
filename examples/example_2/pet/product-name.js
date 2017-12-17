var ProductNameError = require("./errors/product-name-error")

class ProductName {

    constructor(value) {
        if(!this.validateIfString(value)){
            throw new ProductNameError(`Product name ${value} is invalid`);
        }
        this.value = value
    }

    get() {
        return this.value
    }

    validateIfString(value) {
        return typeof value === 'string' || value instanceof String
    }
}
module.exports = ProductName;
