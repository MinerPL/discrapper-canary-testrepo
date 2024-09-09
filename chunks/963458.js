var i = r(192291),
    n = r(22092),
    o = i.aTypedArrayConstructor;
(0, i.exportTypedArrayStaticMethod)(
    'of',
    function () {
        for (var e = 0, t = arguments.length, r = new (o(this))(t); t > e; ) r[e] = arguments[e++];
        return r;
    },
    n
);
