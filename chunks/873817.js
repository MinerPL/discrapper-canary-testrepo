var e = n(717441), o = n(192291), i = n(536524), u = n(959318), f = n(165915), a = o.aTypedArray, c = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)('with', {
    with: function (t, r) {
        var n = a(this), o = u(t), s = i(n) ? f(r) : +r;
        return e(n, c(n), o, s);
    }
}.with, !function () {
    try {
        new Int8Array(1).with(2, {
            valueOf: function () {
                throw 8;
            }
        });
    } catch (t) {
        return 8 === t;
    }
}());
