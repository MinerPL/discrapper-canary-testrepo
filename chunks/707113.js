t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(735250),
    s = t(470079),
    o = t(120356),
    i = t.n(o),
    a = t(338545),
    r = t(399606),
    d = t(481060),
    c = t(201070),
    u = t(893966),
    _ = t(472596),
    E = t(598948),
    x = t(428936),
    I = t(41586),
    C = t(481624);
function N(e) {
    let { guild: n } = e,
        t = (0, c.$j)(n.id),
        s = (0, d.useSpring)({
            height: t ? 3 : 0,
            config: a.config.stiff
        });
    return (0, l.jsx)('div', {
        className: C.loaderContainer,
        children: (0, l.jsx)(a.animated.div, {
            className: C.loaderBar,
            style: s
        })
    });
}
function h(e) {
    let { guild: n, className: t, onPageChange: o, onMemberSelect: a } = e,
        h = n.id,
        T = (0, r.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(h), [h]),
        S = (0, c.$j)(h),
        A = (0, c.M3)(h),
        g = s.useCallback(
            (e) => {
                if (null != e) null == a || a(e);
            },
            [a]
        ),
        M = (0, _.xb)(A, S, T),
        D = s.useRef(null),
        L = s.useRef(null),
        f = s.useCallback(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: i()(C.mainTableContainer, t),
        children: (0, l.jsxs)(d.AdvancedScroller, {
            className: i()(C.horizatonalScroller),
            ref: L,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(I.Z, {
                    guild: n,
                    ref: D
                }),
                (0, l.jsx)(N, { guild: n }),
                (0, l.jsx)(E.Z, {
                    guild: n,
                    onSelectRow: g,
                    searchState: M,
                    onResetForNewMembers: f
                }),
                M !== _.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(x.Z, {
                        guildId: n.id,
                        onPageChange: o
                    })
            ]
        })
    });
}
