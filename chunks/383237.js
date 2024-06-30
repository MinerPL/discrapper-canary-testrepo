r.d(t, {
    Z: function () {
        return n;
    }
});
var a = r(781212);
function n(e, t) {
    if (null == e)
        return {};
    var r, n, s = (0, a.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) {
            if (r = o[n], !(t.indexOf(r) >= 0))
                Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        }
    }
    return s;
}
