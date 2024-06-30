n.d(t, {
    Z: function () {
        return s;
    }
}), n(51350);
var r, i, a, o = n(149765);
class s {
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        return o.ug(20, e);
    }
    static asBigFlag(e) {
        return !Object.hasOwn(this.cache, e) && (this.cache[e] = o.vB(e)), this.cache[e];
    }
}
a = {}, (i = 'cache') in (r = s) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a;
