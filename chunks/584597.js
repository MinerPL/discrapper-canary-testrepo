n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(81825);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a extends r.Z {
    static createFromServer(e) {
        return new a(e);
    }
    constructor(e) {
        super(), i(this, 'id', void 0), i(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
    }
}
