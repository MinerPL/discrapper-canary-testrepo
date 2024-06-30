var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(534761), o = n(841144);
function c(e) {
    let {
        icon: t,
        iconNode: n,
        timestamp: a,
        className: l,
        children: c,
        contentClassName: d,
        iconClassName: u,
        iconContainerClassName: _,
        compact: E = !1
    } = e;
    return (0, i.jsxs)('div', {
        className: s()(l, {
            [o.container]: !0,
            [o.compact]: E,
            [o.cozy]: !E
        }),
        children: [
            null != n && (0, i.jsx)('div', {
                className: s()(o.iconContainer, _),
                children: n
            }),
            null != t && (0, i.jsx)('div', {
                className: o.iconContainer,
                children: (0, i.jsx)('div', {
                    'data-accessibility': 'desaturate',
                    className: s()(o.icon, o.iconSize, u),
                    style: { backgroundImage: 'url(\''.concat(t, '\')') }
                })
            }),
            (0, i.jsxs)('div', {
                className: s()(d, o.content),
                children: [
                    c,
                    null != a && (0, i.jsx)(r.Z, { timestamp: a })
                ]
            })
        ]
    });
}
c.Action = e => {
    let {
        onClick: t,
        children: n
    } = e;
    return (0, i.jsxs)('span', {
        className: o.action,
        children: [
            '\u2014',
            (0, i.jsx)(l.Anchor, {
                onClick: t,
                className: o.actionAnchor,
                children: n
            })
        ]
    });
}, t.Z = c;
