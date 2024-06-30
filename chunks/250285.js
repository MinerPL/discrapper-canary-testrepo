n(47120);
var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(789978), o = n(748780), c = n(91192), d = n(906732), _ = n(171368), u = n(981631), E = n(611726);
t.Z = e => {
    let {
            userId: t,
            children: n,
            isLast: r,
            className: T
        } = e, [I, R] = a.useState(!1), {analyticsLocations: C} = (0, d.ZP)(), p = a.useCallback(() => {
            (0, _.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: C,
                analyticsLocation: { section: u.jXE.FAMILY_CENTER }
            });
        }, [
            t,
            C
        ]), g = () => {
            R(!0);
        }, A = () => {
            R(!1);
        };
    return (0, s.jsx)(c.mh, {
        id: t,
        children: e => (0, s.jsx)(l.tE, {
            offset: {
                left: -8,
                right: -8
            },
            children: (0, s.jsx)(o.Z.div, {
                style: { opacity: 1 },
                className: i()(E.rowItem, T, {
                    [E.last]: r,
                    [E.active]: I
                }),
                onMouseEnter: g,
                onMouseLeave: A,
                onClick: p,
                ...e,
                children: n(I)
            })
        })
    });
};
