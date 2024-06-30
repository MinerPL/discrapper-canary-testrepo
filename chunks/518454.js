n.d(t, {
    Z: function () {
        return function e(t, n, i, a) {
            let {length: o} = i, s = a, l = n;
            if (0 === o)
                return 0;
            if (null == s)
                s = l;
            else if (s === l)
                return l;
            return (l += t === r.a8.UP ? -1 : 1) < 0 || l >= o ? e(t, l < 0 ? o : -1, i, s) : i[l].type === r.h8.HEADER ? e(t, l, i, s) : l;
        };
    }
});
var r = n(727785);
