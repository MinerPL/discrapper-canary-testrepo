t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(120356), s = t.n(a), l = t(481060), o = t(285952), r = t(727218), c = t(689938), d = t(397264);
function u(e) {
    let {
        name: n,
        description: t,
        icon: a,
        imageSrc: u,
        iconBackgroundColor: I,
        iconClassName: m,
        details: _,
        detailsClassName: N,
        isHeader: E,
        isPremium: T
    } = e;
    return (0, i.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        className: d.wrapper,
        children: [
            null != a || null != u ? (0, i.jsx)(o.Z.Child, {
                shrink: 0,
                grow: 0,
                children: function (e, n, t, a) {
                    if (null != n)
                        return (0, i.jsx)('img', {
                            alt: '',
                            src: n,
                            className: s()(d.iconWrapper, a)
                        });
                    let l = null;
                    return null != e && (l = 'string' == typeof e ? (0, i.jsx)('img', {
                        alt: '',
                        src: e,
                        className: s()(d.icon, a)
                    }) : (0, i.jsx)(e, {
                        className: s()(d.icon, a),
                        color: 'currentColor'
                    })), (0, i.jsx)(o.Z, {
                        align: o.Z.Align.CENTER,
                        justify: o.Z.Justify.CENTER,
                        style: { backgroundColor: t },
                        className: d.iconWrapper,
                        children: l
                    });
                }(a, u, I, m)
            }) : null,
            function (e) {
                let {
                        name: n,
                        description: t,
                        details: a,
                        detailsClassName: u,
                        isHeader: I,
                        isPremium: m
                    } = e, _ = null == a ? void 0 : a.map((e, n) => {
                        let {
                            icon: t,
                            text: a
                        } = e;
                        return (0, i.jsxs)('div', {
                            className: s()(d.detailsWrapper, I ? d.headerDetailsWrapper : null),
                            children: [
                                null != t ? (0, i.jsx)(t, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: d.detailsIcon
                                }) : null,
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: u,
                                    children: a
                                })
                            ]
                        }, n);
                    });
                return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(r.Z, {
                            size: I ? r.Z.Sizes.SIZE_24 : r.Z.Sizes.SIZE_16,
                            className: I ? d.header : d.secondaryHeader,
                            children: [
                                n,
                                m && (0, i.jsx)(l.Tooltip, {
                                    text: c.Z.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                                    children: e => (0, i.jsx)(l.TicketIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: d.premiumIcon
                                    })
                                })
                            ]
                        }),
                        null != t ? (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: t
                        }) : null,
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Direction.HORIZONTAL,
                            align: o.Z.Align.CENTER,
                            wrap: o.Z.Wrap.WRAP,
                            children: _
                        })
                    ]
                });
            }({
                name: n,
                description: t,
                details: _,
                detailsClassName: N,
                isHeader: E,
                isPremium: T
            })
        ]
    });
}
