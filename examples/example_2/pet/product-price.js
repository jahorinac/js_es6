var ProductPriceError = require("./errors/product-price-error")

const TAX_VALUE = 1.2

class ProductPrice {

    constructor(value) {
        if(!this.validatePositiveNumber(value)){
            throw new ProductPriceError(`Product price ${value} is invalid`);
        }
        this.value = value
    }

    getGross() {
        return this.value * TAX_VALUE;
    }

    getNet() {
        return this.value
    }

    validatePositiveNumber(value) {
        return !isNaN(value) && value > 0;
    }
}
module.exports = ProductPrice;
