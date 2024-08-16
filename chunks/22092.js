var e = n(161581),
    o = n(936940),
    i = n(80270),
    u = n(192291).NATIVE_ARRAY_BUFFER_VIEWS,
    f = e.ArrayBuffer,
    a = e.Int8Array;
t.exports =
    !u ||
    !o(function () {
        a(1);
    }) ||
    !o(function () {
        new a(-1);
    }) ||
    !i(function (t) {
        new a(), new a(null), new a(1.5), new a(t);
    }, !0) ||
    o(function () {
        return 1 !== new a(new f(2), 1, void 0).length;
    });
