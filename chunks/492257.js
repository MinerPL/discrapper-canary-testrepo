var e = n(192291),
    o = n(581031),
    i = n(526988),
    u = n(436330),
    f = e.aTypedArray,
    a = e.getTypedArrayConstructor,
    c = e.exportTypedArrayMethod,
    s = o(e.TypedArrayPrototype.sort);
c('toSorted', function (t) {
    void 0 !== t && i(t);
    var r = f(this);
    return s(u(a(r), r), t);
});
