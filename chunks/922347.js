n.d(t, {
    M: function () {
        return s;
    },
    Z: function () {
        return o;
    }
});
var r = n(979554),
    i = n(656698);
function a(e, t, n) {
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
let s = (e) => e instanceof o;
class o extends i.Z {
    static fromServer(e) {
        return new o({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), a(this, 'asset', void 0), a(this, 'label', void 0), (this.type = r.Z.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
}
