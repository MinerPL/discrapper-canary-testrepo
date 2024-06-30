n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(748780), o = n(91192), c = n(481060), d = n(239091), u = n(687683), _ = n(957832);
t.Z = function (e) {
    let {
            index: t,
            children: a,
            user: E,
            channel: h,
            onClick: I,
            isFocused: m,
            isActive: p,
            onOtherHover: g,
            className: T
        } = e, [S, C] = s.useState(!1), [N, f] = s.useState(!1), A = () => {
            C(!0), m && !p && !N && (null == g || g());
        }, Z = () => {
            C(!1);
        }, L = (e, t) => {
            if (null != t)
                f(!0), (0, d.jW)(e, async () => {
                    let {default: e} = await Promise.all([
                        n.e('79695'),
                        n.e('17400'),
                        n.e('61035')
                    ]).then(n.bind(n, 881351));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        user: t
                    });
                }, {
                    onClose: () => {
                        f(!1);
                    }
                });
        };
    return (0, i.jsx)(o.mh, {
        id: h.id,
        children: e => (0, i.jsx)(c.FocusRing, {
            offset: {
                left: -8,
                right: -8
            },
            children: (0, i.jsx)(l.Z.div, {
                className: r()(_.messageRequestItem, T, {
                    [_.active]: p || N,
                    [_.firstItem]: 0 === t
                }),
                onContextMenu: e => L(e, E),
                onMouseEnter: A,
                onMouseLeave: Z,
                onClick: null != I ? I : void 0,
                style: {
                    LIST_ROW_HEIGHT: u.WN,
                    opacity: 1
                },
                ...e,
                children: a(S || p || N)
            })
        })
    });
};
