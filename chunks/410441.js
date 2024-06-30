n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(423875), l = n(481060), s = n(908841), r = n(689938), o = n(346737);
let c = {
    [a.p.PROVIDER_UNSPECIFIED]: null,
    [a.p.SPOTIFY]: {
        getLabel: () => r.Z.Messages.SPOTIFY,
        Icon: s.Z
    }
};
function u(e) {
    var t;
    let {
            onClick: n,
            provider: a,
            'aria-label': s
        } = e, r = (0, l.useToken)(l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
            Icon: u,
            getLabel: d
        } = null !== (t = c[a]) && void 0 !== t ? t : {};
    if (null == u)
        return null;
    let h = null != s ? s : null == d ? void 0 : d(), p = (0, i.jsx)(u, {
            color: r.hex(),
            width: 16,
            height: 16
        });
    return null == n ? (0, i.jsx)('div', {
        className: o.container,
        'aria-label': h,
        children: p
    }) : (0, i.jsx)(l.Tooltip, {
        text: h,
        children: e => (0, i.jsx)(l.Clickable, {
            className: o.container,
            ...e,
            onClick: n,
            children: p
        })
    });
}
