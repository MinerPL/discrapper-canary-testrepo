n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(689938);
let a = ['a', 'b', 'c', 'd'],
    s = (e) => e;
function r(e, t) {
    let n = {},
        i = Math.min(e.length, a.length);
    for (let s = 0; s < i; ++s) n[a[s]] = (n, i) => t(e[s], i);
    return n;
}
class l {
    asString() {
        return this.transformed(s);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return '';
            case 1:
                return e(this.items[0], '');
            case 2:
                return i.Z.Messages.GENERIC_FORMATTED_LIST_TWO.format(r(this.items, e));
            case 3:
                return i.Z.Messages.GENERIC_FORMATTED_LIST_THREE.format(r(this.items, e));
            default:
                return i.Z.Messages.GENERIC_FORMATTED_LIST_FOUR.format(r(this.items, e));
        }
    }
    constructor(e) {
        var t, n, i;
        (t = this),
            (i = void 0),
            (n = 'items') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this.items = e);
    }
}
