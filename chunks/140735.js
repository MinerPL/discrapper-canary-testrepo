r.d(e, {
    i: function () {
        return a;
    }
});
var n = r(147658), _ = r(590171);
class a {
    static __initStatic() {
        this.id = 'LinkedErrors';
    }
    __init() {
        this.name = a.id;
    }
    constructor(t = {}) {
        a.prototype.__init.call(this), this._key = t.key || 'cause', this._limit = t.limit || 5;
    }
    setupOnce(t, e) {
        t((t, r) => {
            let i = e(), o = i.getClient(), E = i.getIntegration(a);
            if (!o || !E)
                return t;
            let s = o.getOptions();
            return (0, n.Z)(_.GJ, s.stackParser, s.maxValueLength, E._key, E._limit, t, r), t;
        });
    }
}
a.__initStatic();
