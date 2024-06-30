let n;
r.d(e, {
    c: function () {
        return a;
    }
});
var _ = r(442853);
class a {
    constructor() {
        a.prototype.__init.call(this);
    }
    static __initStatic() {
        this.id = 'FunctionToString';
    }
    __init() {
        this.name = a.id;
    }
    setupOnce() {
        n = Function.prototype.toString;
        try {
            Function.prototype.toString = function (...t) {
                let e = (0, _.HK)(this) || this;
                return n.apply(e, t);
            };
        } catch (t) {
        }
    }
}
a.__initStatic();
