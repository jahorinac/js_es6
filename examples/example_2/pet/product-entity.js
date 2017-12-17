
class ProductEntity {

        constructor(productId, productName, productPrice) {
            this.id     = productId
            this.name   = productName
            this.price  = productPrice
        }

        getId() {
            return this.id.get()
        }

        getName() {
            return this.name.get()
        }

        getGrossPrice() {
            return this.price.getGross()
        }
    }

module.exports = ProductEntity
