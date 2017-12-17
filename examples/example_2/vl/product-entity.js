class ProductEntity {

    getData(){
        return {
            id:this.id,
            name:this.name,
            price:this.price
        }
    }
    setId(id) {
        this.id=id;
    }
    setName(name) {
        this.name=name;
    }

    setPrice(price) {
        this.price=price;
    }
}

module.exports = ProductEntity;

