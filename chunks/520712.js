var e = n(192291),
    o = n(692994),
    i = n(165915),
    u = n(974971),
    f = n(926515),
    a = n(581031),
    c = n(936940),
    s = e.aTypedArray,
    y = e.exportTypedArrayMethod,
    p = a(''.slice);
y(
    'fill',
    function (t) {
        var r = arguments.length;
        return s(this), f(o, this, 'Big' === p(u(this), 0, 3) ? i(t) : +t, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0);
    },
    c(function () {
        var t = 0;
        return (
            new Int8Array(2).fill({
                valueOf: function () {
                    return t++;
                }
            }),
            1 !== t
        );
    })
);
