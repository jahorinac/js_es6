
const TAX_VALUE = 1.22

class ProductEntity {

        constructor(data) {
            this.id     = data.id
            this.name   = data.name
            this.price  = data.price
        }

        getId() {
            return this.id
        }

        getName() {
            return this.name
        }

        getGrossPrice() {
            return this.price * TAX_VALUE
        }
    }

module.exports = ProductEntity