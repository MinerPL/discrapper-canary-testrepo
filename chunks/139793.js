n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(434650),
    s = n(353647);
function o(e) {
    let { userId: t, onAction: n } = e,
        [o, l] = (0, r.useState)(!1),
        u = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t)),
        c = (0, r.useCallback)(
            (e) => {
                e && (n({ action: 'VIEW' }), l(!0));
            },
            [n]
        );
    return (0, a.O)(c, void 0, !u && !o);
}
