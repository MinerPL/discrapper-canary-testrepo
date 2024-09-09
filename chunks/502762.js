n(627341);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(481060),
    u = n(576635),
    c = n(213053),
    d = n(652853),
    _ = n(228168),
    E = n(280598);
let f = (e, t) => {
        let n = (0, o.EQ)(e)
                .with(_.y0.BITE_SIZE, () => E.biteSizeOuter)
                .with(_.y0.FULL_SIZE, () => E.fullSizeOuter)
                .with(_.y0.PANEL, () => E.userPanelOuter)
                .with(_.y0.CARD, () => E.userCardOuter)
                .otherwise(() => E.userProfileOuter),
            r = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
        return s()(n, r);
    },
    h = (e, t, n) => {
        let r = (0, o.EQ)(e)
                .with(_.y0.PANEL, () => E.userPanelInner)
                .with(_.y0.FULL_SIZE, () => E.userProfileModalInner)
                .with(_.y0.BITE_SIZE, () => E.biteSizeInner)
                .with(_.y0.CARD, () => E.userCardInner)
                .otherwise(() => E.userProfileInner),
            i = (0, o.EQ)(e)
                .with(_.y0.PANEL, () => E.userPanelInnerThemed)
                .with(_.y0.BITE_SIZE, () => E.biteSizeInnerThemed)
                .with(_.y0.FULL_SIZE, () => E.fullSizeInnerThemed)
                .otherwise(() => (n ? E.userProfileInnerThemedWithBanner : t ? E.userProfileInnerThemedPremiumWithoutBanner : E.userProfileInnerThemedNonPremium));
        return s()(r, i);
    },
    p = i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, profileType: a, className: o, pendingThemeColors: _, pendingProfileEffectId: p, themeOverride: I, children: m, forceShowPremium: T = !1, showOutOfBoundaryComponents: S = !1 } = e,
            {
                theme: g,
                primaryColor: A,
                secondaryColor: N
            } = (0, u.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: _,
                isPreview: T
            }),
            { profileThemeStyle: O, profileThemeClassName: R } = (0, c.Z)({
                theme: null != I ? I : g,
                primaryColor: A,
                secondaryColor: N
            }),
            v = (null == i ? void 0 : i.canEditThemes) || T,
            C = null !== p && ((null == i ? void 0 : i.banner) != null || void 0 !== p);
        return (0, r.jsx)('div', {
            className: s()(f(a, v), S ? E.showOutOfBoundaryComponents : void 0, R, o),
            style: O,
            ref: t,
            children: (0, r.jsx)('div', {
                className: h(a, v, C),
                children: (0, r.jsx)(l.ThemeContextProvider, {
                    theme: null != I ? I : g,
                    children: (0, r.jsx)(d.X, {
                        profileType: a,
                        theme: null != I ? I : g,
                        primaryColor: A,
                        secondaryColor: N,
                        children: m
                    })
                })
            })
        });
    }),
    I = (e) =>
        (0, o.EQ)(e)
            .with(_.y0.BITE_SIZE, () => E.biteSizeOverlayBackground)
            .with(_.y0.FULL_SIZE, () => E.fullSizeOverlayBackground)
            .otherwise(() => E.overlayBackground),
    m = i.forwardRef(function (e, t) {
        let { children: n, className: i } = e,
            { profileType: a } = (0, d.z)();
        return (0, r.jsx)('div', {
            ref: t,
            className: s()(I(a), i),
            children: n
        });
    });
t.Z = Object.assign(p, { Overlay: m });
