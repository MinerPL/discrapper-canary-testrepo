var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(223021), l = n(55935), u = n(689938), c = n(250050);
t.Z = function (e) {
    let {
            children: t,
            className: n,
            compact: i = !1,
            timestamp: d,
            isVisibleOnlyOnHover: _ = !1,
            cozyAlt: E = !1,
            isInline: f = !0,
            id: h,
            isEdited: p = !1
        } = e, m = (0, l.Hg)(d), I = i ? (0, l.vc)(d, 'LT') : (0, l.Y4)(d), T = i ? (0, s.Z)(I) : null, g = p ? u.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({ timeFormatted: m }) : m;
    return (0, r.jsx)('span', {
        className: a()(n, T, {
            [c.timestamp]: !0,
            [c.timestampVisibleOnHover]: _,
            [c.timestampInline]: f,
            [c.alt]: E
        }),
        children: (0, r.jsx)(o.Tooltip, {
            text: (0, l.vc)(d, 'LLLL'),
            'aria-label': g,
            tooltipClassName: c.timestampTooltip,
            delay: 750,
            children: e => (0, r.jsx)('time', {
                ...e,
                id: h,
                dateTime: d.toISOString(),
                children: null != t ? t : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: c.separator,
                            'aria-hidden': !0,
                            children: i ? '[' : ' \u2014 '
                        }),
                        I,
                        i && (0, r.jsxs)('i', {
                            className: c.separator,
                            'aria-hidden': !0,
                            children: [
                                ']',
                                ' '
                            ]
                        })
                    ]
                })
            })
        })
    });
};
