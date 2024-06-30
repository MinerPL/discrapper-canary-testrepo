n.d(t, {
    H: function () {
        return a;
    },
    Z: function () {
        return o;
    }
});
var r = n(979554), i = n(656698);
let a = e => e instanceof o;
class o extends i.Z {
    static fromServer(e) {
        return new o({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), this.type = r.Z.PROFILE_EFFECT;
    }
}
