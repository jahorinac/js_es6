class ProductNameError extends Error {

    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, this.constructor)
    }

}
module.exports = ProductNameError
