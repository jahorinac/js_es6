var ProductIdError = require("./errors/product-id-error")

class ProductId {

    constructor(value) {
        if(!this.validatePositiveInteger(value)){
            throw new ProductIdError(`Product id ${value} is invalid`);
        }
        this.value = value
    }

    get() {
        return this.value
    }

    validatePositiveInteger(value) {
        return !isNaN(value) && parseInt(Number(value)) == value && value > 0;
    }
}
module.exports = ProductId;
