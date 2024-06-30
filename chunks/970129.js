n.d(t, {
    T: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var s = n(735250), a = n(470079), i = n(442837), r = n(481060), l = n(496675), o = n(689938);
function c(e, t, n) {
    let s = (0, i.e7)([l.Z], () => !l.Z.isRoleHigher(e, t, n), [
        e,
        t,
        n
    ]);
    return a.useMemo(() => s && n.id === (null == t ? void 0 : t.id), [
        s,
        n,
        t
    ]) ? o.Z.Messages.HELP_ROLE_LOCKED_MINE : s ? o.Z.Messages.HELP_ROLE_LOCKED : null;
}
function d(e) {
    let {
        className: t,
        tooltipText: n,
        width: a = 16,
        height: i = 16
    } = e;
    return (0, s.jsx)(r.Tooltip, {
        text: n,
        children: e => (0, s.jsx)('div', {
            className: t,
            ...e,
            children: (0, s.jsx)(r.LockIcon, {
                size: 'custom',
                color: 'currentColor',
                width: a,
                height: i
            })
        })
    });
}
