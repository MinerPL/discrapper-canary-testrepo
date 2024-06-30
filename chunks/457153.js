var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(920906), l = n(759853), c = n(95985), d = n(743294), u = n(232604);
let p = o.forwardRef(function (e, t) {
    var n;
    let {
            className: r,
            expansionSpring: p,
            isExpanded: x,
            isExpansionAnimationComplete: m,
            quest: g
        } = e, C = o.useRef(null), f = (null === (n = g.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
    return (0, s.jsxs)(i.animated.div, {
        ref: t,
        'aria-hidden': x && m,
        className: a()(r, u.contentCollapsed, {
            [u.contentCollapsedExpanded]: x,
            [u.contentCollapsedAccepted]: f
        }),
        style: {
            opacity: p.to({
                range: [
                    0,
                    1
                ],
                output: [
                    1,
                    0
                ]
            })
        },
        children: [
            f ? (0, s.jsx)('div', {
                className: u.postEnrollmentBackground,
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(d.aY, ', ').concat(d.v6, ')') }
            }) : null,
            (0, s.jsx)(l.Z, {
                progressBarRef: C,
                quest: g,
                isExpanded: x
            }),
            (0, s.jsx)('div', {
                className: u.contentCollapsedWrapper,
                children: f ? (0, s.jsx)(c.Z, {
                    quest: g,
                    progressBarRef: C,
                    isExpanded: !1
                }) : null
            })
        ]
    });
});
t.Z = p;
