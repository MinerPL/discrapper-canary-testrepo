r.d(e, {
    b: function () {
        return n;
    }
});
class n extends Error {
    constructor(t, e = 'warn') {
        super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e;
    }
}
