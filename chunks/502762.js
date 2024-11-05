n(627341);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(481060),
    u = n(576635),
    c = n(213053),
    d = n(652853),
    f = n(228168),
    _ = n(320038);
let h = (e, t) => {
        let n = (0, o.EQ)(e)
                .with(f.y0.BITE_SIZE, () => _.biteSizeOuter)
                .with(f.y0.FULL_SIZE, () => _.fullSizeOuter)
                .with(f.y0.PANEL, () => _.userPanelOuter)
                .otherwise(() => _.userProfileOuter),
            r = t ? _.userProfileOuterThemed : _.userProfileOuterUnthemed;
        return s()(n, r);
    },
    p = (e, t, n) => {
        let r = (0, o.EQ)(e)
                .with(f.y0.PANEL, () => _.userPanelInner)
                .with(f.y0.FULL_SIZE, () => _.userProfileModalInner)
                .with(f.y0.BITE_SIZE, () => _.biteSizeInner)
                .otherwise(() => _.userProfileInner),
            i = (0, o.EQ)(e)
                .with(f.y0.PANEL, () => _.userPanelInnerThemed)
                .with(f.y0.BITE_SIZE, () => _.biteSizeInnerThemed)
                .with(f.y0.FULL_SIZE, () => _.fullSizeInnerThemed)
                .otherwise(() => (n ? _.userProfileInnerThemedWithBanner : t ? _.userProfileInnerThemedPremiumWithoutBanner : _.userProfileInnerThemedNonPremium));
        return s()(r, i);
    },
    m = i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, profileType: a, className: o, pendingThemeColors: f, pendingProfileEffectId: m, themeOverride: g, children: E, forceShowPremium: v = !1, showOutOfBoundaryComponents: I = !1 } = e,
            {
                theme: S,
                primaryColor: T,
                secondaryColor: b
            } = (0, u.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: f,
                isPreview: v
            }),
            { profileThemeStyle: y, profileThemeClassName: A } = (0, c.Z)({
                theme: null != g ? g : S,
                primaryColor: T,
                secondaryColor: b
            }),
            N = (null == i ? void 0 : i.canEditThemes) || v,
            C = null !== m && ((null == i ? void 0 : i.banner) != null || void 0 !== m);
        return (0, r.jsx)('div', {
            className: s()(h(a, N), I ? _.showOutOfBoundaryComponents : void 0, A, o),
            style: y,
            ref: t,
            children: (0, r.jsx)('div', {
                className: p(a, N, C),
                children: (0, r.jsx)(l.ThemeContextProvider, {
                    theme: null != g ? g : S,
                    children: (0, r.jsx)(d.X, {
                        profileType: a,
                        theme: null != g ? g : S,
                        primaryColor: T,
                        secondaryColor: b,
                        children: E
                    })
                })
            })
        });
    }),
    g = (e) =>
        (0, o.EQ)(e)
            .with(f.y0.BITE_SIZE, () => _.biteSizeOverlayBackground)
            .with(f.y0.FULL_SIZE, () => _.fullSizeOverlayBackground)
            .otherwise(() => _.overlayBackground),
    E = i.forwardRef(function (e, t) {
        let { children: n, className: i } = e,
            { profileType: a } = (0, d.z)();
        return (0, r.jsx)('div', {
            ref: t,
            className: s()(g(a), i),
            children: n
        });
    });
t.Z = Object.assign(m, { Overlay: E });
