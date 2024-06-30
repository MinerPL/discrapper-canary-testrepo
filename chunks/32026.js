var e = n(161581), o = n(926515), i = n(192291), u = n(49693), f = n(18316), a = n(339718), c = n(936940), s = e.RangeError, y = e.Int8Array, p = y && y.prototype, h = p && p.set, v = i.aTypedArray, d = i.exportTypedArrayMethod, g = !c(function () {
        var t = new Uint8ClampedArray(2);
        return o(h, t, {
            length: 1,
            0: 3
        }, 1), 3 !== t[1];
    }), l = g && i.NATIVE_ARRAY_BUFFER_VIEWS && c(function () {
        var t = new y(2);
        return t.set(1), t.set('2', 1), 0 !== t[0] || 2 !== t[1];
    });
d('set', function (t) {
    v(this);
    var r = f(arguments.length > 1 ? arguments[1] : void 0, 1), n = a(t);
    if (g)
        return o(h, this, n, r);
    var e = this.length, i = u(n), c = 0;
    if (i + r > e)
        throw s('Wrong length');
    for (; c < i;)
        this[r + c] = n[c++];
}, !g || l);
