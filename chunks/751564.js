var r = n(690244)('%TypeError%'),
    i = n(395238),
    a = n(116298),
    s = n(441596),
    o = n(75150),
    l = n(860438),
    u = n(828148),
    c = n(148309),
    d = n(240919),
    _ = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== _(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!u(t)) throw new r('Assertion failed: IsPropertyKey(P) is not true');
    var E = i(
        {
            Type: _,
            IsDataDescriptor: l,
            IsAccessorDescriptor: o
        },
        n
    )
        ? n
        : d(n);
    if (
        !i(
            {
                Type: _,
                IsDataDescriptor: l,
                IsAccessorDescriptor: o
            },
            E
        )
    )
        throw new r('Assertion failed: Desc is not a valid Property Descriptor');
    return a(l, c, s, e, t, E);
};
