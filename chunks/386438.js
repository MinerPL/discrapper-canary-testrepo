n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(51350);
var r,
    i,
    a,
    s = n(149765);
class o {
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        return s.ug(20, e);
    }
    static asBigFlag(e) {
        return !Object.hasOwn(this.cache, e) && (this.cache[e] = s.vB(e)), this.cache[e];
    }
}
(a = {}),
    (i = 'cache') in (r = o)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a);
