n.d(t, {
    H: function () {
        return d;
    }
}), n(47120);
var r = n(735250), o = n(470079), i = n(120356), l = n.n(i), u = n(481060), a = n(572004), c = n(689938), s = n(560237);
function d(e) {
    let {
            chunks: t,
            className: n,
            onCopy: i,
            ...d
        } = e, E = o.useMemo(() => null == t ? void 0 : t.join(' '), [t]), [f, _] = o.useState(!1), I = o.useCallback(() => {
            _(!0), (0, a.JG)(E), null == i || i();
        }, [
            i,
            E
        ]), C = f ? u.CircleCheckIcon : u.CopyIcon;
    return (0, r.jsx)(u.Clickable, {
        className: l()(s.container, n),
        onClick: I,
        children: (0, r.jsx)(u.Tooltip, {
            text: f ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
            children: e => (0, r.jsx)(C, {
                ...d,
                ...e,
                size: 'xxs',
                color: f ? u.tokens.colors.TEXT_POSITIVE : u.tokens.colors.INTERACTIVE_NORMAL
            })
        })
    });
}
