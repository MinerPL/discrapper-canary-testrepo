n.d(t, {
    Z: function () {
        return p;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(772848), o = n(960259), c = n(481060), u = n(481051), d = n(749124);
function h(e) {
    let {
            width: t = 24,
            height: n = 24,
            isBadged: l = !1,
            isTyping: s = !1
        } = e, [u] = a.useState(() => (0, r.Z)()), d = (0, o.bW)().enabled;
    return (0, i.jsxs)('svg', {
        width: t,
        height: n,
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('mask', {
                    id: u,
                    children: [
                        (0, i.jsx)('rect', {
                            fill: 'white',
                            width: '100%',
                            height: '100%'
                        }),
                        s && (0, i.jsx)('g', {
                            fill: 'black',
                            transform: 'translate(5.5, '.concat(d ? 10.5 : 8.5, ') scale(').concat(11 / 24, ')'),
                            children: (0, i.jsx)(c.AnimatedDots, {
                                dotRadius: 3.5,
                                spacing: 3,
                                fill: 'black'
                            })
                        }),
                        l && (0, i.jsx)('circle', {
                            cx: '20',
                            cy: '19',
                            r: '10',
                            fill: 'red'
                        })
                    ]
                })
            }),
            d ? (0, i.jsx)('g', {
                mask: 'url(#'.concat(u, ')'),
                children: (0, i.jsx)(c.ChatIcon, {
                    size: 'custom',
                    width: t,
                    height: n,
                    color: 'currentColor'
                })
            }) : (0, i.jsx)('path', {
                fill: 'currentColor',
                d: 'M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z',
                mask: 'url(#'.concat(u, ')')
            })
        ]
    });
}
function p(e) {
    var t;
    let {
            className: n,
            unreadCount: a,
            mentionCount: l,
            isTyping: r,
            canBadge: o
        } = e, c = null != l && l > 0, p = null !== (t = c ? l : a) && void 0 !== t ? t : 0, m = o && null != a && a > 0;
    return (0, i.jsxs)('div', {
        className: s()(d.chatIcon, n),
        children: [
            (0, i.jsx)(h, {
                isBadged: m,
                isTyping: r
            }),
            m && (0, i.jsx)(u.Z, {
                hasMentions: c,
                truncatedCount: p > 99 ? '99+' : p,
                className: d.badge
            })
        ]
    });
}
