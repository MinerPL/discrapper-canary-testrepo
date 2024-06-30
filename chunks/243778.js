n.d(t, {
    U: function () {
        return d;
    },
    Z: function () {
        return _;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(399606), o = n(237997), s = n(261376), l = n(68985), u = n(706140), c = n(921944);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = (0, a.e7)([o.Z], () => !!__OVERLAY__ && o.Z.isInstanceUILocked()), [d, _] = (0, u.c)(e, t, r), E = !n && null != d && !s.O.has(d);
    return i.useEffect(() => () => {
        E && l.Z.lastDCDismissed !== d && _(c.L.AUTO_DISMISS, !0);
    }, [
        E,
        _,
        d
    ]), [
        d,
        _
    ];
}
function _(e) {
    let {
            contentTypes: t,
            children: n,
            groupName: i,
            bypassAutoDismiss: a
        } = e, [o, s] = d(t, i, a);
    return (0, r.jsx)(r.Fragment, {
        children: n({
            visibleContent: o,
            markAsDismissed: s
        })
    });
}
