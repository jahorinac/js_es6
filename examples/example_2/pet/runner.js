
var ProductFactory = require("./product-factory")

class Runner {

    run() {

        let data = {
            "id"    : 1,
            "name"  : "Premium",
            "price" : '54.99'
        }

        try {
            let aProduct = ProductFactory.create(data)
            console.log(aProduct.getId())
            console.log(aProduct.getName())
            console.log(aProduct.getGrossPrice())
        }
        catch(e) {
            console.log(e.message)
        }
    }
}

new Runner().run()
